import {useState,useEffect} from "react";

function getSavedValue(key, initialValue) {
  const savedValue =JSON.parse(localStorage.getItem(key)) || initialValue;
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;  
}
export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value,key]);
    return [value, setValue];
}