import { ReactElement } from "react"
import { AmountInput, Currency } from "./components";


const Calculator = (): ReactElement => {

  return (
    <div className="flex flex-col items-center gap-10 p-2 w-full h-1/2 bg-blue rounded-2xl">
      <AmountInput />
      <Currency />
    </div>
  );
};

export default Calculator;
 