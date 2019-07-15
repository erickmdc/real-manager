import uuid from 'uuid/v4'
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    _id: { type: String, default: () => uuid() }, // precisa ser igual ao playerId ou teamId
    fileName: { type: String, required: true },
    mimeType: { type: String, required: true },
    fileSize: { type: Number },
    content: { type: String, required: true }
}, { collection: 'photos' });

const Model = mongoose.model('photos', schema);

export default class {
    save(image) {
        const model = new Model(image);
        return model.save()
          .then(result => result.toObject());
    }
    getById(id) {
        return Model.findById(id).then(image => {
            if (!image) throw new Error('IMAGE_NOT_FOUND');
            return image.toObject();
        });
    }
};