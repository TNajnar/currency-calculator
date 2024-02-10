import { Dispatch, createContext } from "react";
import { TExchangeValues } from "../api/customTypes";
import { TCurrencyAction, TSelectedExchange } from "../utils/types";

type TSelected = {
  from: TSelectedExchange;
  to: TSelectedExchange;
}

const initialSelectedExchanges = {
  from: null,
  to: null,
}

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
