import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid/v4';

const schema = new mongoose.Schema({
  _id: { type: String , default: () => uuid() },
  description: { type: String, required: true },
  value: { type: Number, required: true }
}, { collection: 'scouts' });

const Model = mongoose.model('scouts', schema);

export default class {
  get() {
    const query = Model.find({});
    return query.exec().then(result => {
      return result.map(o => o.toObject());
    });
  }

  save(scout) {
    const model = new Model(scout);
    return model.save(); 
  }
}