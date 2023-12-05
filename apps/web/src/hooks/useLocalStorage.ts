import { useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
    // If a non-browser enviroment, return early
    if (typeof window === "undefined") {
      return [] as T;
    }

    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value) as T;
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      console.error(error);

      return [] as T;
    }
  });

  const setLocalStorageStateValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };

  return [localStorageValue, setLocalStorageStateValue];
};
