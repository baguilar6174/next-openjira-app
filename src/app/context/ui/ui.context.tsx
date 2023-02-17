import { createContext } from 'react';

export interface ContextProps {
	isMenuOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
