import CancelIcon from '@mui/icons-material/Cancel';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { EntriesContext } from '../context/entries/entries.context';
import { UIContext } from '../context/ui/ui.context';
import { useForm } from '../hooks/useForm';

const initialForm = {
	task: ''
};

export const AddEntry: React.FC = (): React.ReactElement => {
	const { addEntry } = useContext(EntriesContext);
	const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

	const [isTouched, setIsTouched] = useState<boolean>(false);

	const { form, onInputChange, onResetForm } = useForm(initialForm);
	const { task } = form;

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAddingEntry ? (
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
		setIsAddingEntry(false);
	}

	function showForm(): void {
		setIsAddingEntry(true);
	}

	function save(): void {
		if (task.length === 0) return;
		addEntry(task);
		setIsAddingEntry(false);
		setIsTouched(false);
		onResetForm();
	}
};
