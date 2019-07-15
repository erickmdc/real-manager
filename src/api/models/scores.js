import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid/v4';

const scorePerScoutSchema = new mongoose.Schema({
  scoutId: { type: String , required: true },
  scoutDescription: { type: String, required: true },
  quantity: { type: Number, required: true },
  score: { type: Number, required: true },
}, { _id: false });

const schema = new mongoose.Schema({
  _id: { type: String , default: () => uuid() },
  playerId: { type: String, required: true },
  playerName: { type: String, required: true },
  scorePerScouts: [{ type: scorePerScoutSchema, required: true }]
}, { collection: 'scores' });

const Model = mongoose.model('scores', schema);

export default class {
  get() {
    const query = Model.find({});
    return query.exec().then(result => {
      return result.map(o => o.toObject());
    });
  }

  save(score) {
    const model = new Model(score);
    return model.save(); 
  }
}