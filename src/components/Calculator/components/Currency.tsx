import { ReactElement } from "react";
import { default as ReactSelect } from 'react-select'
import useCurrency from "../hooks/useCurrency";

const Currency = (): ReactElement => {
  const { resolveBuy, resolveSell } = useCurrency();

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <ReactSelect
        className="w-full text-black"
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

      <ReactSelect
        className="w-full text-black"
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
