import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import players from './routes/players';
import teams from './routes/teams';
import matches from './routes/matches';
import './database/config';

const app = express();
const port = 4500;

app.use(bodyParser.json({limit: '120mb'}));
app.use(cors());
app.use('/api/players', players);
app.use('/api/teams', teams);
app.use('/api/matches', matches);

app.listen(port, () => console.log(`API real Manager on port ${port}!`));