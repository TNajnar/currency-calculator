import { ChangeEvent, ReactElement } from "react"
import useCalculatorProvider from "../../../context/useCalculatorProvider";
import clsx from "clsx";

const AmountInput = (): ReactElement => {
  const { amount, setAmount } = useCalculatorProvider();
  
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    setAmount(inputValue);
  };

  return (
    <label className="relative flex flex-col gap-4 w-3/5 h-fit">
      <span>Amount</span>
      <input
        className="p-3 text-white bg-inherit border rounded-md"
        id="amount"
        maxLength={9}
        name="amount"
        onChange={handleOnChange}
        placeholder="Your amount"
        required
        type="text"
        value={amount}
      />
      <button 
        className={clsx("absolute right-0 bottom-0 p-3 w-fit transition-all duration-300 ease-in-out",
          amount ? "block" : "hidden"
        )}
        onClick={(): void => setAmount('')}
      >
        X
      </button>
    </label>
  );
};

export default AmountInput
