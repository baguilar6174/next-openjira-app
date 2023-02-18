import { createContext } from 'react';

export interface ContextProps {
	isMenuOpen: boolean;
	isAddingEntry: boolean;
	setIsAddingEntry: (value: boolean) => void;
	openSidebar: () => void;
	closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
