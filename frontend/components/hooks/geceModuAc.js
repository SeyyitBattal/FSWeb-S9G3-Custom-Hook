import { useState } from "react";
import { localStorageKullan } from "./localStorageKullan";

export const geceModuAc = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <p>{localStorageKullan}</p>
    </div>
  );
};
