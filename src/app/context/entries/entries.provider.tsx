import { useSnackbar } from 'notistack';
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
	const { enqueueSnackbar } = useSnackbar();

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

	async function updateEntry(entry: Entry, showSnackbar: boolean = false): Promise<void> {
		try {
			const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, entry);
			dispatch({
				type: '[Entries] - Update entry',
				payload: data
			});
			if (showSnackbar) {
				enqueueSnackbar('Updated entry', {
					variant: 'success',
					autoHideDuration: 2000,
					anchorOrigin: {
						vertical: 'top',
						horizontal: 'right'
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
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
