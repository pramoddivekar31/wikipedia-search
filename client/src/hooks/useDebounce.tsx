import { useState, useEffect } from "react";

const useDebounce = <T,>(value: T, timeInMS: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, timeInMS);

    return () => clearTimeout(handler);
  }, [value, timeInMS]);

  return debouncedValue;
};

export default useDebounce;
