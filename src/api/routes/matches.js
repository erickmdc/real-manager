import express from 'express';
import Matches from '../models/matches';
const matchesRepo = new Matches();
const router = express.Router();

router.get('/', (req, res) => {
  return matchesRepo.get()
  .then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.get('/:teamName', (req, res) => {
  const { teamName } = req.params;
  return matchesRepo.getTeamNextMatch(teamName)
  .then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.post('/', (req, res) => {
  const { matches } = req.body;
  return Promise.all(matches.map(match => {
    console.log(`salvando partida ${match.home.teamName} x ${match.away.teamName}`);
    return matchesRepo.save(match)
  }))
  .then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

export default router;