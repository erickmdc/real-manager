import express from 'express';
import Players from '../models/players';
const playersRepo = new Players();
const router = express.Router();

router.get('/', (req, res) => {
  return playersRepo.get()
  .then(snapshot => {
    const players = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(players);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.get('/mongo', (req, res) => {
  const player = {
    name: "Mohammed Salah",
    price: 30.19,
    teamName: "Liverpool",
    position: "Pivô"
  }
  return playersRepo.save(player)
  .then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.post('/', (req, res) => {
  const { players } = req.body;
  Promise.all(players.map(player => {
    console.log('inserting ' + player.name);
    return playersRepo.doc().set(player);
  })).then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
})

export default router;