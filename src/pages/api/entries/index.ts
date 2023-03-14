import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'GET':
			return getEntries(res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const getEntries = async (res: NextApiResponse<Data>): Promise<void> => {
	await db.connect();
	const entries = await Entry.find().sort({ createdAt: 'ascending' });
	await db.disconnect();
	res.status(200).json(entries);
};
