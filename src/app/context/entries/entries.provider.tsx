import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import { EntriesContext, entriesReducer } from '.';
import { Entry } from '../../interfaces';

export interface EntriesState {
	entries: Entry[];
}

const INITIAL_STATE: EntriesState = {
	entries: []
};

type EntriesProviderProps = {
	children: React.ReactNode;
};

export const EntriesProvider = ({ children }: EntriesProviderProps): React.ReactElement => {
	const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);

	return <EntriesContext.Provider value={{ ...state, addEntry, updateEntry }}>{children}</EntriesContext.Provider>;

	function addEntry(description: string): void {
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

	function updateEntry(entry: Entry): void {
		dispatch({
			type: '[Entries] - Update entry',
			payload: entry
		});
	}
};
