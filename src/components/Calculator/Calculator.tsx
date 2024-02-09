import { ReactElement } from "react"
import { AmountInput, Currency } from "./components";


const Calculator = (): ReactElement => {

  return (
    <div className="flex flex-col items-center gap-10 px-32 py-20 w-full h-1/2 bg-blue rounded-2xl">

      <AmountInput />
      <Currency />
    </div>
  );
};

export default Calculator;
 