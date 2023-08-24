import { useState } from "react";
import { useLocalStorage } from "./localStorageKullan";
export const useInput = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
  const toggle = () => setDarkMode(!darkMode);
  return [darkMode, setDarkMode, toggle];
};
