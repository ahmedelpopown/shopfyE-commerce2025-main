 import { Range } from "react-range";

// eslint-disable-next-line react/prop-types
const PriceRangeFilter = ({ min, max, value, onChange ,onFinalChange}) => {
  const STEP = 10;

  return (
    <div className="w-full p-6 mx-auto bg-white rounded-lg ">
      <h3 className="mb-4 text-base font-semibold text-black uppercase">Filter by Price</h3>

      <Range
        step={10}
      min={min}
      max={max}
      values={value}
      onChange={onChange}
      onFinalChange={onFinalChange}
       
        renderTrack={({ props, children }) => {
          // eslint-disable-next-line react/prop-types
          const { key, ...rest } = props;

          const minPercent = ((value[0] - min) / (max - min)) * 100;
          const maxPercent = ((value[1] - min) / (max - min)) * 100;

          return (
            <div
              key={key}
              {...rest}
              className="w-full h-1 rounded cursor-pointer"
              style={{
                // eslint-disable-next-line react/prop-types
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
        renderThumb={({ props }) => {
          // eslint-disable-next-line react/prop-types
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              className="w-4 h-4 bg-white border-[#04d39f] border-[1px] rounded-full cursor-pointer"
            />
          );
        }}
      />

      <div className="flex justify-between mt-6 font-normal text-gray-500">
        <span>PRICE: ${value[0]} - ${value[1]}</span>
        
      </div>
    </div>
  );
};

export default PriceRangeFilter;
