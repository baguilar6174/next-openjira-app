import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../app/interfaces';

export interface IEntry extends Entry {}

const entrySchema = new Schema({
	description: { type: String, required: true },
	createdAt: { type: Number, required: true },
	status: {
		type: String,
		enum: {
			values: ['pending', 'in-progress', 'done'],
			message: '{VALUE} is not allowed'
		},
		required: true,
		default: 'pending'
	}
});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;
