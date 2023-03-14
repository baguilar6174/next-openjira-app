import { EntriesState } from '.';
import { Entry } from '../../interfaces';

type EntriesActionType =
	| { type: '[Entries] - Add entry'; payload: Entry }
	| { type: '[Entries] - Update entry'; payload: Entry }
	| { type: '[Entries] - Refresh data'; payload: Entry[] };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] - Refresh data':
			return {
				...state,
				entries: [...action.payload]
			};
		case '[Entries] - Add entry':
			return {
				...state,
				entries: [...state.entries, action.payload]
			};
		case '[Entries] - Update entry':
			return {
				...state,
				entries: state.entries.map((entry): Entry => {
					if (entry._id === action.payload._id) {
						entry.status = action.payload.status;
						entry.description = action.payload.description;
					}
					return entry;
				})
			};
		default:
			return state;
	}
};
