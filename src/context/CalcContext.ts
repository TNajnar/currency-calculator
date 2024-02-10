import { Dispatch, createContext } from "react";
import { TExchangeValues, TMainExchange } from "../api/customTypes";
import { TCurrencyAction } from "../utils/types";

type TSelected = {
  from: TMainExchange;
  to: TMainExchange;
}

const initialSelectedExchanges: TSelected = {
  from: {label: '', value: 0},
  to: {label: '', value: 0},
};

export interface ICalculatorProps {
  amount: number | string;
  currency: Array<TExchangeValues>;
  dispatch: Dispatch<TCurrencyAction>;
  selectedExchanges: TSelected;
  setAmount: (value: number | string) => void;
  setCurrency: (value: Array<TExchangeValues>) => void;
}

const initialContextState: ICalculatorProps = {
  amount: '',
  currency: [],
  dispatch: () => {},
  setAmount: () => undefined,
  selectedExchanges: initialSelectedExchanges,
  setCurrency: () => undefined,
}

const CalcContext = createContext<ICalculatorProps>(initialContextState);

CalcContext.displayName = 'CalcContext';

export default CalcContext;
