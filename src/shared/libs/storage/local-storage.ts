export interface SaveStorage {
  saveLocal: boolean;
  key?: string;
  value: string;
}

export interface SetStorageProps {
  key?: string;
  value: string;
}

export const setLocalStorage = ({ key, value }: SetStorageProps) => {
  localStorage.setItem(key || "", value);
};

export const getLocalStorageAsOBJ = (key: string) => {
  return JSON.parse(JSON.stringify(localStorage.getItem(key)));
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key) || "";
};

export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
