import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../context/ui';

const menuItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

export const Sidebar = (): React.ReactElement => {
	const { isMenuOpen, closeSidebar } = useContext(UIContext);

	return (
		<Drawer anchor="left" open={isMenuOpen} onClose={closeSidebar}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '5px' }}>
					<Typography variant="h4">Menu</Typography>
				</Box>
				<List>
					{menuItems.map(
						(text): React.ReactElement => (
							<ListItemButton key={text}>
								<ListItemIcon>
									<AddBusinessIcon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						)
					)}
				</List>
				<Divider />
				<List>
					{menuItems.map(
						(text): React.ReactElement => (
							<ListItemButton key={text}>
								<ListItemIcon>
									<AddBusinessIcon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						)
					)}
				</List>
			</Box>
		</Drawer>
	);
};
