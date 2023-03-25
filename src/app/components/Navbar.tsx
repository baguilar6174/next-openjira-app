import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
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
				<Link href="/">
					<Typography variant="h6">Open Jira</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};
