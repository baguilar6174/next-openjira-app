import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import { EntriesContext, entriesReducer } from '.';
import { Entry } from '../../interfaces';

export interface EntriesState {
	entries: Entry[];
}

const INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuid(),
			description: 'New task',
			status: 'pending',
			createdAt: Date.now()
		},
		{
			_id: uuid(),
			description: 'New task in progress',
			status: 'in-progress',
			createdAt: Date.now() - 10000
		},
		{
			_id: uuid(),
			description: 'New task pending',
			status: 'pending',
			createdAt: Date.now() - 100000
		}
	]
};

type EntriesProviderProps = {
	children: React.ReactNode;
};

export const EntriesProvider = ({ children }: EntriesProviderProps): React.ReactElement => {
	const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);

	return <EntriesContext.Provider value={{ ...state, addEntry }}>{children}</EntriesContext.Provider>;

	function addEntry(description: string) {
		const entry: Entry = {
			_id: uuid(),
			description,
			status: 'pending',
			createdAt: Date.now()
		};
		dispatch({
			type: '[Entries] - Add entry',
			payload: entry
		});
	}
};
