import { useCardLayout } from "@/context/CardLayoutContext";

const CardLayoutButtons = () => {
  const { setLayout } = useCardLayout();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLayout("DefaultShop")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        🟦 Grid 3
      </button>
      <button
        onClick={() => setLayout("FiltersArea")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        🟨 Grid 4
      </button>
      <button
        onClick={() => setLayout("ProductListView")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        📄 List View
      </button>
      <button
        onClick={() => setLayout("HiddenSidebar")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        🟥 Grid 2
      </button>
    </div>
  );
};

export default CardLayoutButtons;
