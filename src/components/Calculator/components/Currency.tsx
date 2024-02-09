import { ReactElement } from "react";
import Select from 'react-select'


//  TODO API for currency's
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Currency = (): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <Select
        className="w-full text-black"
        options={options}
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

      <Select
        className="w-full text-black"
        options={options}
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
