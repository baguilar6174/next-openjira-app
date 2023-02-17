export type EntryStatus = 'pending' | 'in-progress' | 'done';

export interface Entry {
	_id: string;
	description: string;
	createdAt: number;
	status: EntryStatus;
}
