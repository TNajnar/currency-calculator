import { ReactElement } from "react";
import useCalculator from "../../../context/useCalculator";
import useCurrency from "../hooks/useCurrency";
import { default as ReactSelect } from 'react-select'

const Currency = (): ReactElement => {
  const { handleFrom, handleTo, resolveBuy, resolveSell } = useCurrency();
  const {selectedExchanges} = useCalculator();
  console.log(selectedExchanges)

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* From */}
      <ReactSelect
        className="w-full text-black"
        onChange={handleFrom}
        options={resolveBuy}
        styles={{control: (provided) => ({
            ...provided,
            padding: '7px',
          }),
        }}
      />

      <div className="flex flex-col">
        <span>▲</span>
        <span>▼</span>
      </div>
      
      {/* To */}
      <ReactSelect
        className="w-full text-black"
        onChange={handleTo}
        options={resolveSell}
        styles={{control: (provided) => ({
            ...provided,
            padding: '7px',
          }),
        }}
      />
    </div>
  );
};

export default Currency;
