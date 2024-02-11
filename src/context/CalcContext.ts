import { Dispatch, createContext } from "react";
import { TMainExchange, TExchangeData } from "../api/customTypes";
import { TCurrencyAction } from "../utils/types";

type TSelected = {
  from: TMainExchange;
  to: TMainExchange;
}

const initialExchange: TExchangeData = {
  baseCurrencyRate: '',
  rates: [],
}

const initialSelectedExchanges: TSelected = {
  from: { code: '', label: '', value: 0 },
  to: { code: '', label: '', value: 0 },
};

export interface ICalculatorProps {
  amount: number | string;
  dispatch: Dispatch<TCurrencyAction>;
  exchangeData?: TExchangeData;
  selectedExchanges: TSelected;
  setAmount: (value: number | string) => void;
  setExchangeData: (value: TExchangeData) => void;
}

const initialContextState: ICalculatorProps = {
  amount: '',
  dispatch: () => {},
  exchangeData: initialExchange,
  selectedExchanges: initialSelectedExchanges,
  setAmount: () => undefined,
  setExchangeData: () => {},
}

const CalcContext = createContext<ICalculatorProps>(initialContextState);

CalcContext.displayName = 'CalcContext';

export default CalcContext;
