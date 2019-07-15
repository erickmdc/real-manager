import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid/v4';

const playerSchema = new mongoose.Schema({
  id: { type: String , required: true },
  photoId: { type: String, required: false },
  name: { type: String, required: true },
  teamId: { type: String, required: true },
  teamName: { type: String, required: true },
  lastPontuation: { type: Number, default: 0.00 },
  price: { type: Number, required: true },
  value: { type: Number, default: 0.00 },
  position: { type: String, required: true },
}, { _id: false });

const schema = new mongoose.Schema({
  _id: { type: String , required: true },
  name: { type: String, required: true },
  patrimony: { type: Number, default: 0.00 },
  value: { type: Number, default: 0.00 },
  players: [{ type: playerSchema, required: false }]
}, { collection: 'squads' });

const Model = mongoose.model('squads', schema);

export default class {
  get() {
    const query = Model.find({});
    return query.exec().then(result => {
      return result.map(o => o.toObject());
    });
  }

  save(player) {
    const model = new Model(player);
    return model.save(); 
  }
}