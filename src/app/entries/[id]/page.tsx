'use client';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import {
	Button,
	capitalize,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	IconButton,
	Radio,
	RadioGroup,
	TextField
} from '@mui/material';
import { ChangeEvent, useMemo, useState } from 'react';
import { EntryStatus } from '../../interfaces';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'done'];

export default function EntryPage(): React.ReactElement {
	const [inputValue, setInputValue] = useState<string>('');
	const [status, setStatus] = useState<EntryStatus>('pending');
	const [isTouched, setIsTouched] = useState<boolean>(false);

	const isNotValid = useMemo((): boolean => inputValue.length <= 0 && isTouched, [inputValue, isTouched]);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const element = event.target as HTMLInputElement;
		const { value } = element;
		setInputValue(value);
	};

	const onRadioChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const element = event.target as HTMLInputElement;
		const { value } = element;
		setStatus(value as EntryStatus);
	};

	return (
		<>
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title={`Entry: ${inputValue}`} subheader={`Created ... ago`} />
						<CardContent>
							<TextField
								sx={{ marginY: 2 }}
								fullWidth
								placeholder="New entry"
								autoFocus
								multiline
								label="New entry"
								value={inputValue}
								onChange={onInputChange}
								helperText={isNotValid && 'This field is required'}
								onBlur={(): void => setIsTouched(true)}
								error={isNotValid}
							/>
							<FormControl>
								<FormLabel>Status:</FormLabel>
								<RadioGroup row value={status} onChange={onRadioChange}>
									{validStatus.map((status) => (
										<FormControlLabel key={status} value={status} control={<Radio />} label={capitalize(status)} />
									))}
								</RadioGroup>
							</FormControl>
						</CardContent>
						<CardActions>
							<Button
								startIcon={<SaveOutlinedIcon />}
								variant="contained"
								fullWidth
								onClick={onSubmit}
								disabled={inputValue.length <= 0}
							>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
			<IconButton sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red' }}>
				<DeleteOutlineIcon />
			</IconButton>
		</>
	);

	function onSubmit(): void {
		console.log({ inputValue, status });
	}
}
