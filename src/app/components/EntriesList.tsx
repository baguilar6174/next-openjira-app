import { List, Paper } from '@mui/material';
import { DragEvent, useContext, useMemo } from 'react';

import { EntryCard } from '.';
import { EntriesContext } from '../context/entries/entries.context';
import { UIContext } from '../context/ui/ui.context';
import { Entry, EntryStatus } from '../interfaces';
import Rules from './EntryList.module.css';

type EntriesListProps = {
	status: EntryStatus;
};

export const EntriesList: React.FC<EntriesListProps> = ({ status }): React.ReactElement => {
	const { entries, updateEntry } = useContext(EntriesContext);
	const { isDragging, endDragging } = useContext(UIContext);

	const entriesByStatus = useMemo(
		(): Entry[] => entries.filter((entry): boolean => entry.status === status),
		[entries]
	);
	return (
		<div onDrop={onDrop} onDragOver={allowDrop} className={isDragging ? Rules.dragging : ''}>
			<Paper sx={{ height: 'calc(100vh - 250px)', overflowY: 'scroll', backgroundColor: 'transparent', padding: 2 }}>
				<List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
					{entriesByStatus.map(
						(entry): React.ReactElement => (
							<EntryCard key={entry._id} entry={entry} />
						)
					)}
				</List>
			</Paper>
		</div>
	);

	function onDrop(event: DragEvent<HTMLDivElement>): void {
		const id = event.dataTransfer.getData('entry');
		const entry = entries.find((entry): boolean => entry._id === id)!;
		entry.status = status;
		updateEntry(entry);
		endDragging();
	}

	function allowDrop(event: DragEvent<HTMLDivElement>): void {
		event.preventDefault();
	}
};
