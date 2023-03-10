import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { DragEvent, useContext } from 'react';
import { UIContext } from '../context/ui/ui.context';
import { Entry } from '../interfaces';

type EntryCardProps = {
	entry: Entry;
};

export const EntryCard: React.FC<EntryCardProps> = ({ entry }): React.ReactElement => {
	const { startDragging, endDragging } = useContext(UIContext);

	return (
		<Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={endDragging}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
					<Typography variant="body2">hace 30 min</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);

	function onDragStart(event: DragEvent): void {
		event.dataTransfer.setData('entry', entry._id);
		startDragging();
	}
};
