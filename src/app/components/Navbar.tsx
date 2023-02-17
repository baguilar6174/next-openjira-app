import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../context/ui';

export const Navbar = (): React.ReactElement => {
	const { openSidebar } = useContext(UIContext);

	return (
		<AppBar position="sticky" color="secondary">
			<Toolbar>
				<IconButton onClick={openSidebar}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Open Jira</Typography>
			</Toolbar>
		</AppBar>
	);
};
