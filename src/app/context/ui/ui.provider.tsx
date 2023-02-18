import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
	isMenuOpen: boolean;
	isAddingEntry: boolean;
}

const INITIAL_STATE: UIState = {
	isMenuOpen: false,
	isAddingEntry: false
};

type UIProviderProps = {
	children: React.ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps): React.ReactElement => {
	const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

	return (
		<UIContext.Provider value={{ ...state, openSidebar, closeSidebar, setIsAddingEntry }}>
			{children}
		</UIContext.Provider>
	);

	function openSidebar() {
		dispatch({
			type: '[UI] - open sidebar'
		});
	}

	function closeSidebar() {
		dispatch({
			type: '[UI] - close sidebar'
		});
	}

	function setIsAddingEntry(value: boolean) {
		dispatch({
			type: '[UI] - set is adding entry',
			payload: value
		});
	}
};
