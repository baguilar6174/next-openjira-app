import { createContext } from 'react';
import { Entry } from '../../interfaces';

export interface ContextProps {
	entries: Entry[];
	addEntry: (description: string) => void;
	updateEntry(entry: Entry, showSnackbar?: boolean): void;
}

export const EntriesContext = createContext({} as ContextProps);
