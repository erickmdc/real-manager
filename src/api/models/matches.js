import mongoose, { Query, model } from 'mongoose';
import uuid from 'uuid/v4';

const teamSchema = new mongoose.Schema({
  teamId: { type: String, required: true },
  teamName: { type: String, required: true },
  teamScore: { type: Number, required: false },
  teamShield: { type: String, required: true }
}, { _id: false });

const schema = new mongoose.Schema({
  _id: { type: String , default: () => uuid() },
  round: { type: Number, required: true },
  date: { type: String, required: true },
  played: { type: Boolean, default: false },
  home: { type: teamSchema, required: true },
  away: { type: teamSchema, required: true }
}, { collection: 'matches' });

const Model = mongoose.model('matches', schema);

export default class {
  get() {
    const query = Model.find({});
    return query.exec().then(result => {
      return result.map(o => o.toObject());
    });
  }

  getTeamNextMatch(teamName) {
    const query = { $or: [{'home.teamName': teamName}, {'away.teamName': teamName}], };
    //date: { $gte: new Date() } };

    return Model.find(query).sort({ date: 1 }).then(result => {
      if(result.length === 0) return {};
      return result[0].toObject();
    })
  }

  save(team) {
    const model = new Model(team);
    return model.save(); 
  }
}