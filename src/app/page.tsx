'use client';

import { Card, CardHeader, Grid } from '@mui/material';
import { EntriesList } from './components';

export default function Home(): React.ReactElement {
	return (
		<main>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title="Pending" />
						<EntriesList status="pending" />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title="In progress" />
						<EntriesList status="in-progress" />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title="Done" />
						<EntriesList status="done" />
					</Card>
				</Grid>
			</Grid>
		</main>
	);
}
