import React, { useState, createContext, ReactNode } from "react";

interface Toast {
  message: string;
}

export interface ToastContextType {
  currentToast: Toast | null;
  showToast: (message: string, duration?: number) => void;
  hideToast: () => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContextProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [currentToast, setCurrentToast] = useState<Toast | null>(null);

  const showToast = (message: string, duration: number = 3000): void => {
    setCurrentToast({ message });

    setTimeout(() => {
      hideToast();
    }, duration);
  };

  const hideToast = (): void => {
    setCurrentToast(null);
  };

  const contextValue: ToastContextType = {
    currentToast,
    showToast,
    hideToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {currentToast && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            opacity: 0.9,
            zIndex: 999,
          }}
        >
          {currentToast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
