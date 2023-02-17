import CancelIcon from '@mui/icons-material/Cancel';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from '../hooks/useForm';
import { Entry } from '../interfaces';

const initialForm = {
	task: ''
};

export const AddEntry: React.FC = (): React.ReactElement => {
	const [isAdding, setIsAdding] = useState<boolean>(false);
	const [isTouched, setIsTouched] = useState<boolean>(false);

	const { form, onInputChange, onResetForm } = useForm(initialForm);
	const { task } = form;

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAdding ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder="New task"
						autoFocus
						multiline
						label="New Task"
						helperText={task.length <= 0 && isTouched && 'This field is required'}
						name="task"
						value={task}
						onChange={onInputChange}
						error={task.length <= 0 && isTouched}
						onBlur={(): void => setIsTouched(true)}
					/>
					<Box display="flex" justifyContent="space-between">
						<Button variant="outlined" color="secondary" endIcon={<DataSaverOnIcon />} onClick={save}>
							Save
						</Button>
						<Button variant="text" endIcon={<CancelIcon />} onClick={hideForm}>
							Cancel
						</Button>
					</Box>
				</>
			) : (
				<Button startIcon={<DataSaverOnIcon />} fullWidth variant="outlined" onClick={showForm}>
					New Task
				</Button>
			)}
		</Box>
	);

	function hideForm(): void {
		setIsAdding(false);
	}

	function showForm(): void {
		setIsAdding(true);
	}

	function save(): void {
		if (task.length === 0) return;
		const entry: Entry = {
			_id: uuid(),
			description: task,
			status: 'pending',
			createdAt: new Date().getTime()
		};
		console.log('todo', entry);
		onResetForm();
	}
};
