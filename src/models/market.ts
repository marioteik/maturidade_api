import * as mongoose from 'mongoose';

const marketSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true, unique: true, trim: true },
    description: { type: String, required: false, trim: true },
    creationDate: { type: Date, required: true, default: Date.now() }
});

const _market = mongoose.model('Market', marketSchema);

export default _market;
