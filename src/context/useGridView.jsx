// contexts/useGridView.js
import { useContext } from "react";
import GridViewContext from "./GridViewContext";

const useGridView = () => useContext(GridViewContext);

export default useGridView;
