export const localStorageKullan = () => {
  localStorage.setItem("anahtar", "deger");
  const depo = localStorage.getItem("anahtar");
  console.log("Depo: ", depo);
};
