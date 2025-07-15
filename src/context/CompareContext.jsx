// src/context/CompareContext.jsx
import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const addToCompare = (item) => {
    const exists = compareItems.some((i) => i.id === item.id);
    if (!exists) {
      setCompareItems((prev) => [...prev, item]);
    }
    setShowCompare(true); // افتح المودال دايمًا
  };

  const removeFromCompare = (id) => {
    setCompareItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCompare = () => setCompareItems([]);

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        showCompare,
        addToCompare,
        removeFromCompare,
        clearCompare,
        openCompare: () => setShowCompare(true),
        closeCompare: () => setShowCompare(false),
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
