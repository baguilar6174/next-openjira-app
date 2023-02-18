import { EntriesState } from '.';
import { Entry } from '../../interfaces';

type EntriesActionType = { type: '[Entries] - Add entry'; payload: Entry };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] - Add entry':
			return {
				...state,
				entries: [...state.entries, action.payload]
			};
		default:
			return state;
	}
};
