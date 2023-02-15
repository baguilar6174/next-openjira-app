import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Open Jira</Typography>
			</Toolbar>
		</AppBar>
	);
};
