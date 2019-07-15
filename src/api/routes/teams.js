import express from 'express';
import Teams from '../models/teams';
const teamsRepo = new Teams();
const router = express.Router();

router.get('/', (req, res) => {
  return teamsRepo.get()
  .then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.post('/', (req, res) => {
  const { teams } = req.body;
  return Promise.all(teams.map(team => {
    console.log('salvando jogador ' + team.name);
    return teamsRepo.save(team)
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