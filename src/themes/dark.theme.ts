import { createTheme } from '@mui/material';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900']
});

export enum themePalette {
	BG = '#12181b',
	LIME = '#C8FA5F',
	// Alert styles
	ERROR_MAIN = '#f44336',
	BG_ERROR_MAIN = 'rgba(244,67,54,0.1)'
}

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: themePalette.BG
		},
		primary: {
			main: themePalette.LIME
		}
	},
	typography: {
		fontFamily: roboto.style.fontFamily
	},
	components: {
		MuiAppBar: {
			defaultProps: {},
			styleOverrides: {
				root: {
					backgroundColor: '#4a148c'
				}
			}
		}
	}
});
