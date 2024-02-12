import { ReactElement } from "react";
import { default as ReactSelect } from 'react-select';
import useCurrency from "./hooks/useCurrency";
import Divider from "./Divider";
import { EReducerVariant } from "../../../utils/enums";

const Currency = (): ReactElement => {
  const { exchangeData, handleChange, exchangeValues } = useCurrency();

  const { exchangeFrom, exchangeTo } = exchangeValues;

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* From */}
      <ReactSelect
        className="w-full select-wrapper"
        classNamePrefix="select"
        onChange={(selected): void => handleChange(selected, EReducerVariant.SELECT_FROM)}
        options={exchangeData?.rates}
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
        value={exchangeFrom}
      />

      <Divider />
      
      {/* To */}
      <ReactSelect
        className="w-full select-wrapper"
        classNamePrefix="select"
        onChange={(selected): void => handleChange(selected, EReducerVariant.SELECT_TO)}
        options={exchangeData?.rates}
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
        value={exchangeTo}
      />
    </div>
  );
};

export default Currency;
