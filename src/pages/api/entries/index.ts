import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'GET':
			return getAll(res);
		case 'POST':
			return save(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const getAll = async (res: NextApiResponse<Data>): Promise<void> => {
	try {
		await db.connect();
		const entries = await Entry.find().sort({ createdAt: 'ascending' });
		await db.disconnect();
		res.status(200).json(entries);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};

const save = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	const { description = '' } = req.body;
	const entry = new Entry({
		description,
		createdAt: Date.now()
	});

	try {
		await db.connect();
		await entry.save();
		await db.disconnect();
		return res.status(201).json(entry);
	} catch (error) {
		await db.disconnect();
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
