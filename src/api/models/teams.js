import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid/v4';

const playerSchema = new mongoose.Schema({
  id: { type: String , required: true },
  photoId: { type: String, required: false },
  name: { type: String, required: true },
  isPresident: { type: Boolean, required: true },
  position: { type: String, required: true },
}, { _id: false });

const schema = new mongoose.Schema({
  _id: { type: String , default: () => uuid() },
  name: { type: String, required: true },
  squad: { type: String, required: true },
  players: [{ type: playerSchema, required: true }]
}, { collection: 'teams' });

const Model = mongoose.model('teams', schema);

export default class {
  get() {
    const query = Model.find({});
    return query.exec().then(result => {
      return result.map(o => o.toObject());
    });
  }

  save(team) {
    const model = new Model(team);
    return model.save(); 
  }
}