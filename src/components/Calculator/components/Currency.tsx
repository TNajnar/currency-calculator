import { ReactElement } from "react";
import useCalculator from "../../../context/useCalculator";
import useCurrency from "./hooks/useCurrency";
import { default as ReactSelect } from 'react-select';

const Currency = (): ReactElement => {
  const { handleFrom, handleTo } = useCurrency();
  const { exchangeData: { rates } = {}, selectedExchanges } = useCalculator();

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* From */}
      <ReactSelect
        className="w-full select-wrapper"
        classNamePrefix="select"
        onChange={handleFrom}
        options={rates}
        styles={{control: (provided) => ({
          ...provided,
          backgroundColor: '#171a23',
          padding: '7px',
          }),
          singleValue: base => ({
            ...base,
            color: "white"
          }),
        }}
        value={selectedExchanges.from}
      />

      <div className="flex flex-col">
        <span>▲</span>
        <span>▼</span>
      </div>
      
      {/* To */}
      <ReactSelect
        className="w-full select-wrapper"
        classNamePrefix="select"
        onChange={handleTo}
        options={rates}
        styles={{control: (provided) => ({
          ...provided,
          backgroundColor: '#171a23',
          padding: '7px',
          }),
          singleValue: base => ({
            ...base,
            color: "white"
          }),
        }}
        value={selectedExchanges.to}
      />
    </div>
  );
};

export default Currency;
