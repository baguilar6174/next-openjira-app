import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	const { id } = req.query;

	if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Bad request (invalid id)' });

	switch (req.method) {
		case 'GET':
			return findOne(req, res);
		case 'PUT':
			return update(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const findOne = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	const { id } = req.query;
	try {
		await db.connect();
		const entry = await Entry.findById(id);
		await db.disconnect();
		if (!entry) return res.status(400).json({ message: "Bad request (entry doesn't exist)" });
		return res.status(200).json(entry);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};

const update = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	const { id } = req.query;
	try {
		await db.connect();
		const entryToUpdate = await Entry.findById(id);
		if (!entryToUpdate) {
			await db.disconnect();
			return res.status(400).json({ message: "Bad request (entry doesn't exist)" });
		}
		const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;
		const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });
		await db.disconnect();
		return res.status(200).json(updatedEntry!);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
