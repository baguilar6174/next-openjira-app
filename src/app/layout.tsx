'use client';

import './globals.css';

import { Box } from '@mui/material';
import { ThemeConfig } from '../themes/theme.config';
import { Navbar, Sidebar } from './components';
import { UIProvider } from './context/ui';

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
	return (
		<html lang="en">
			<head />
			<body>
				<UIProvider>
					<ThemeConfig>
						<>
							<Navbar />
							<Sidebar />
							<Box sx={{ flexFlow: 1 }}>{children}</Box>
						</>
					</ThemeConfig>
				</UIProvider>
			</body>
		</html>
	);
}
