import type { NextApiRequest, NextApiResponse } from 'next';
import { Entry as IEntry } from '../../app/interfaces';
import { db } from '../../database';
import { Entry } from '../../models';

type Data = {
	message: string;
};

const entries: Partial<IEntry>[] = [
	{
		description: 'New task',
		status: 'pending',
		createdAt: Date.now()
	},
	{
		description: 'New task in progress',
		status: 'in-progress',
		createdAt: Date.now() - 10000
	},
	{
		description: 'New task pending',
		status: 'pending',
		createdAt: Date.now() - 100000
	}
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (process.env.NODE_ENV === 'production') {
		return res.status(401).json({
			message: 'No access to this endpoint'
		});
	}
	await db.connect();
	await Entry.deleteMany();
	await Entry.insertMany(entries);
	await db.disconnect();
	res.status(200).json({ message: 'Created fake data' });
}
