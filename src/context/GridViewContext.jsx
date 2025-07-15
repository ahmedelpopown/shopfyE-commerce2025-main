// contexts/GridViewContext.jsx
import { createContext, useState } from "react";

const GridViewContext = createContext();

// eslint-disable-next-line react/prop-types
export const GridViewProvider = ({ children }) => {
 const [viewMode, setViewMode] = useState("xl"); // sm / md / lg / xl

  return (
    <GridViewContext.Provider value={{viewMode, setViewMode  }}>
      {children}
    </GridViewContext.Provider>
  );
};

export default GridViewContext;


