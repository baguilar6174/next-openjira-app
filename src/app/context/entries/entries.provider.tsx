import { useEffect, useReducer } from 'react';

import { EntriesContext, entriesReducer } from '.';
import entriesApi from '../../../database/api';
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

	useEffect(() => {
		refreshEntries();
	}, []);

	return <EntriesContext.Provider value={{ ...state, addEntry, updateEntry }}>{children}</EntriesContext.Provider>;

	async function addEntry(description: string): Promise<void> {
		try {
			const { data } = await entriesApi.post<Entry>('/entries', { description });
			dispatch({
				type: '[Entries] - Add entry',
				payload: data
			});
		} catch (error) {
			console.log(error);
		}
	}

	function updateEntry(entry: Entry): void {
		dispatch({
			type: '[Entries] - Update entry',
			payload: entry
		});
	}

	async function refreshEntries(): Promise<void> {
		try {
			const { data } = await entriesApi.get<Entry[]>('/entries');
			dispatch({
				type: '[Entries] - Refresh data',
				payload: data
			});
		} catch (error) {
			console.log(error);
		}
	}
};
