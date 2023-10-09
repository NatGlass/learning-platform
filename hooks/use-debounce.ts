import { useEffect, useState } from "react";

// To avoid using up db requests for each keystroke in the search,
// don't send the request until the user has stopped typing for at least 500ms,
// assuming they have finished typing

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
