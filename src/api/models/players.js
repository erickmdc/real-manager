import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid';

const schema = new mongoose.Schema({
  _id: { type: String , default: uuid() },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  teamName: { type: String, required: true },
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
    return model.save(); 
  }
}