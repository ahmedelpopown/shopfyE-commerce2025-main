/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CardLayoutContext = createContext();

const layoutToViewMode = {
  DefaultShop: "xl",
  FiltersArea: "lg",
  HiddenSidebar: "lg",
  NoPageHeader: "md",
  FilterStyleWidget: "md",
  ProductListView: "sm", // ← خليه sm هنا
  SmallCategories: "md",
  Land: "lg",
};

export const CardLayoutProvider = ({ children, defaultLayout = "DefaultShop" }) => {
  const [layout, setLayout] = useState(defaultLayout);
  const [viewMode, setViewMode] = useState(layoutToViewMode[defaultLayout] || "md");

  useEffect(() => {
    setLayout(defaultLayout);
    setViewMode(layoutToViewMode[defaultLayout] || "md");
  }, [defaultLayout]);

  const value = useMemo(() => ({
    layout,
    setLayout,
    viewMode,
    setViewMode,
  }), [layout, viewMode]);

  return (
    <CardLayoutContext.Provider value={value}>
      {children}
    </CardLayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCardLayout = () => useContext(CardLayoutContext);