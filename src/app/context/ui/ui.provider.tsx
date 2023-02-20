import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
	isMenuOpen: boolean;
	isAddingEntry: boolean;
	isDragging: boolean;
}

const INITIAL_STATE: UIState = {
	isMenuOpen: false,
	isAddingEntry: false,
	isDragging: false
};

type UIProviderProps = {
	children: React.ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps): React.ReactElement => {
	const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

	return (
		<UIContext.Provider value={{ ...state, openSidebar, closeSidebar, setIsAddingEntry, startDragging, endDragging }}>
			{children}
		</UIContext.Provider>
	);

	function openSidebar(): void {
		dispatch({
			type: '[UI] - open sidebar'
		});
	}

	function closeSidebar(): void {
		dispatch({
			type: '[UI] - close sidebar'
		});
	}

	function setIsAddingEntry(value: boolean): void {
		dispatch({
			type: '[UI] - set is adding entry',
			payload: value
		});
	}

	function startDragging(): void {
		dispatch({
			type: '[UI] - start dragging'
		});
	}

	function endDragging(): void {
		dispatch({
			type: '[UI] - end dragging'
		});
	}
};
