import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid/v4';

const schema = new mongoose.Schema({
  _id: { type: String , default: () => uuid() },
  name: { type: String, required: true },
  skill: { type: String, required: false },
  teamId: { type: String, required: true },
  teamName: { type: String, required: true },
  isPresident: { type: Boolean, default: false },
  lastPontuation: { type: Number, default: 0.00 },
  average: { type: Number, default: 0.00 },
  appreciation: { type: Number, default: 0.00 },
  price: { type: Number, required: true },
  position: { type: String, required: true },
}, { collection: 'players' });

const Model = mongoose.model('players', schema);

export default class {
  get() {
    const query = Model.find({});
    return query.exec().then(result => {
      return result.map(o => o.toObject());
    });
  }

  save(player) {
    const model = new Model(player);
    return model.save()
      .then(result => result.toObject()); 
  }
}