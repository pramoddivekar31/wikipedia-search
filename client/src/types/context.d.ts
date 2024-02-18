export interface ToastProviderProps {
  children: ReactNode;
}
export interface Toast {
  message: string;
}

export interface ToastContextType {
  currentToast: Toast | null;
  showToast: (message: string, duration?: number) => void;
  hideToast: () => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export interface SearchProviderProps {
  children: ReactNode;
}

export interface ISearchInitialState {
  searchList: SearchResults[];
  history: string[];
}

export interface Action {
  type: string;
  payload?: any;
}

export interface SearchContextType {
  state: ISearchInitialState;
  dispatch: React.Dispatch<Action>;
}
