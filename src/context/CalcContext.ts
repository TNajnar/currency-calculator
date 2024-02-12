import { Dispatch, createContext } from "react";
import { TCurrencyAction } from "../utils/types";
import { TMainExchange, TExchangeData } from "../api/customTypes";

type TSelected = {
  from?: TMainExchange;
  to?: TMainExchange;
}

const initialExchange: TExchangeData = {
  baseCurrencyRate: '',
  rates: [],
}

export interface ICalculatorProps {
  amount: number | string;
  dispatch: Dispatch<TCurrencyAction>;
  exchangeData?: TExchangeData;
  firstCurrencyFrom?: TMainExchange;
  firstCurrencyTo?: TMainExchange;
  selectedExchanges?: TSelected;
  setAmount: (value: number | string) => void;
  setExchangeData: (value: TExchangeData) => void;
  setFirstCurrencyFrom: (fromCountry: TMainExchange) => void;
  setFirstCurrencyTo: (toCountry: TMainExchange) => void;
}

const initialContextState: ICalculatorProps = {
  amount: '',
  dispatch: () => {},
  exchangeData: initialExchange,
  firstCurrencyFrom: undefined,
  firstCurrencyTo: undefined,
  selectedExchanges: undefined,
  setAmount: () => undefined,
  setExchangeData: () => {},
  setFirstCurrencyFrom: () => undefined,
  setFirstCurrencyTo: () => undefined,
}

const CalcContext = createContext<ICalculatorProps>(initialContextState);

CalcContext.displayName = 'CalcContext';

export default CalcContext;
