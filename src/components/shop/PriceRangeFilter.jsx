import React, { useState } from "react";
import { Range } from "react-range";

const PriceRangeFilter = () => {
  const STEP = 10;
  const MIN = 0.0;
  const MAX = 2000;

  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg ">
      <h3 className="mb-4 text-lg font-bold text-gray-700">Filter by Price</h3>

      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => {
          const minPercent = ((values[0] - MIN) / (MAX - MIN)) * 100;
          const maxPercent = ((values[1] - MIN) / (MAX - MIN)) * 100;

          return (
            <div
              {...props}
              className="w-full h-1 rounded cursor-pointer"
              style={{
                ...props.style,
                background: `linear-gradient(
                  to right, 
                  #969696 0%, 
                  #969696 ${minPercent}%, 
                  #04d39f ${minPercent}%, 
                  #04d39f ${maxPercent}%, 
                  #969696 ${maxPercent}%, 
                  #969696 100%
                )`,
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="w-4 h-4 bg-white border-[#04d39f] border-[1px] rounded-full  cursor-pointer"
          >
            {/* <div className="absolute w-16 text-sm font-semibold text-center text-blue-700 top-6 -left-3">
              {index === 0 ? `Min: $${values[0]}` : `Max: $${values[1]}`}
            </div> */}
          </div>
        )}
      />

      <div className="flex justify-between mt-6 text-gray-700 font-sm">
        <span>
          {" "}
          Price: ${values[0]} - ${values[1]}
        </span>
        {/* <span>Max Price: </span> */}
        <div className="font-bold cursor-pointer">Filter</div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
