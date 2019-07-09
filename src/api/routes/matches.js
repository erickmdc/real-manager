import express from 'express';

const matchesRepo = {};
const router = express.Router();

router.get('/', (req, res) => {
  return matchesRepo.get()
  .then(snapshot => {
    const matches = snapshot.docs.map(doc => {
      const data = doc.data();
      return { ...data, id: doc.id, date: data.date.toDate() };
    });
    res.send(matches);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.get('/:teamName', (req, res) => {
  const name = req.params.teamName;
  return matchesRepo.where('homeName', '==', name)
  .where('date', '>=', new Date())
  .orderBy('date')
  // .where('awayName', '==', name)
  .get()
  .then(snapshot => {
    const matches = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(matches.find(() => true));
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

router.post('/', (req, res) => {
  const { matches } = req.body;
  Promise.all(matches.map(match => {
    console.log(`inserting ${match.homeName} x ${match.awayName}`);
    return matchesRepo.doc().set(match);
  })).then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err.message)
    res.send(err.message);
  });
});

export default router;