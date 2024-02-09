import { createContext } from "react";

export interface ICalculatorProps {
  amount: number | string;
  setAmount: (value: number | string) => void;
}

const initialContextState: ICalculatorProps = {
  amount: '',
  setAmount: () => undefined,
}

const CalcContext = createContext<ICalculatorProps>(initialContextState);

CalcContext.displayName = 'CalcContext';

export default CalcContext;
