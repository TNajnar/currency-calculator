import { createContext } from "react";
import { TExchangeValues } from "../api/customTypes";

export interface ICalculatorProps {
  amount: number | string;
  currency: Array<TExchangeValues>;
  setAmount: (value: number | string) => void;
  setCurrency: (value: Array<TExchangeValues>) => void;
}

const initialContextState: ICalculatorProps = {
  amount: '',
  currency: [],
  setAmount: () => undefined,
  setCurrency: () => undefined,
}

const CalcContext = createContext<ICalculatorProps>(initialContextState);

CalcContext.displayName = 'CalcContext';

export default CalcContext;
