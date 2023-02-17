import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../interfaces';

type EntryCardProps = {
	entry: Entry;
};

export const EntryCard: React.FC<EntryCardProps> = ({ entry }): React.ReactElement => {
	return (
		<Card sx={{ marginBottom: 1 }}>
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
};
