import { useState } from "react";
import { localStorageKullan } from "./localStorageKullan";

export const useInput = () => {
  const [darkMode, setDarkMode] = useState(false);
  const onClickHandler = () => setDarkMode(!darkMode);
  return [darkMode, onClickHandler];
};
