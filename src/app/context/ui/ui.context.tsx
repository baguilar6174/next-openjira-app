import { createContext } from 'react';

export interface ContextProps {
	isMenuOpen: boolean;
	isAddingEntry: boolean;
	isDragging: boolean;
	setIsAddingEntry: (value: boolean) => void;
	openSidebar: () => void;
	closeSidebar: () => void;
	startDragging: () => void;
	endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
