import { createContext, useContext, useState } from "react";

export let ProductContext = createContext({});

export let ProductProvider = ({ children }) => {
  let [count, setCount] = useState(100);

  let share = {
    count,
    setCount,
  };
  return (
    <ProductContext.Provider value={share}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
