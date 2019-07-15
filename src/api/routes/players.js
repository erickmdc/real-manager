import express from 'express';
import Players from '../models/players';
import Photos from '../models/photos';
const playersRepo = new Players();
const photosRepo = new Photos();
const router = express.Router();

router.get('/', (req, res) => {
  return playersRepo.get()
  .then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.post('/', (req, res) => {
  const { players } = req.body;
  //console.log(req.body);
  return Promise.all(players.map(player => {
    console.log('salvando jogador ' + player.name);
    return playersRepo.save(player).then(result => {
      return { player: result, photo: player.photo }
    })
  }))
  .then(result => {
    return Promise.all(result.map(({ player, photo }) => {
      console.log('salvando photo do jogador ' + player.name);
      return photosRepo.save({ _id: player._id, ...photo }).then(result => {
        return { ...player, photo: `data:${result.mimeType};base64,${result.content}` };
      });
    }))
  })
  .then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message);
    res.status(500).send({ error: 'INTERNAL_SERVER_ERROR', message: err.message });
  });
});

export default router;