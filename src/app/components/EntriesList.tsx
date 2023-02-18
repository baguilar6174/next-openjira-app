import { List, Paper } from '@mui/material';
import { DragEvent, useContext, useMemo } from 'react';

import { EntryCard } from '.';
import { EntriesContext } from '../context/entries/entries.context';
import { Entry, EntryStatus } from '../interfaces';

type EntriesListProps = {
	status: EntryStatus;
};

export const EntriesList: React.FC<EntriesListProps> = ({ status }): React.ReactElement => {
	const { entries } = useContext(EntriesContext);
	const entriesByStatus = useMemo(
		(): Entry[] => entries.filter((entry): boolean => entry.status === status),
		[entries]
	);
	return (
		<div onDrop={onDrop} onDragOver={allowDrop}>
			<Paper sx={{ height: 'calc(100vh - 250px)', overflowY: 'scroll', backgroundColor: 'transparent', padding: 2 }}>
				<List sx={{ opacity: 1 }}>
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
		event.preventDefault();
		const id = event.dataTransfer.getData('entry');
		console.log(id);
	}

	function allowDrop(event: DragEvent<HTMLDivElement>) {
		event.preventDefault();
	}
};
