import { ToastContextType, ToastContext } from "context/ToastContextProvider";
import { useContext } from "react";

const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

export default useToast;
