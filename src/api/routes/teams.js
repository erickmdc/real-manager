import express from 'express';

const teamsRepo = {};
const router = express.Router();

router.get('/', (req, res) => {
  return teamsRepo.get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(teams);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.get('/:teamName', (req, res) => {
  const name = req.params.teamName;
  return teamsRepo.where('name', '==', name).get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(teams.find(() => true));
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.post('/', (req, res) => {
  const { teams } = req.body;
  Promise.all(teams.map(team => {
    console.log('inserting ' + team.name);
    return teamsRepo.doc().set(team);
  })).then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

export default router;