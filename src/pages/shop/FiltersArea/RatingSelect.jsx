/* eslint-disable react/prop-types */
import { Combobox } from "@headlessui/react";
import { useState } from "react";

const RatingSelect = ({ options = [], value, onChange }) => {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-full">
      <Combobox value={value} onChange={onChange}>
        <div className="relative">
          <Combobox.Input
            className="w-full px-3 py-2 border rounded"
            placeholder="اختر تقييم"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(selected) => selected?.label || ""}
          />
          <Combobox.Options className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border rounded shadow-lg max-h-60">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-2 text-gray-500">لا توجد نتائج</div>
            ) : (
              filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.value}
                  value={option}
                  className={({ active }) =>
                    `px-4 py-2 cursor-pointer ${
                      active ? "bg-teal-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  {option.label}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default RatingSelect;
