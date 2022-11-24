//Get token from localstorage
export const getDataToLocalStorage = () => {
  return JSON.parse(localStorage.getItem("token"));
};

// Set data in localstorage with token property
export const setDataToLocalStorage = (value) => {
  return localStorage.setItem("token", JSON.stringify(value));
};
