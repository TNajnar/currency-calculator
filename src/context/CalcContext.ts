import { Dispatch, createContext } from "react";
import { TMainExchange, TExchangeData } from "../api/customTypes";
import { TCurrencyAction } from "../utils/types";

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
  firstCurrencyFrom?: TMainExchange;
  firstCurrencyTo?: TMainExchange;
  exchangeData?: TExchangeData;
  selectedExchanges?: TSelected;
  setAmount: (value: number | string) => void;
  setExchangeData: (value: TExchangeData) => void;
  setFirstCurrencyFrom: (fromCountry: TMainExchange) => void;
  setFirstCurrencyTo: (toCountry: TMainExchange) => void;
}

const initialContextState: ICalculatorProps = {
  amount: '',
  dispatch: () => {},
  firstCurrencyFrom: undefined,
  firstCurrencyTo: undefined,
  exchangeData: initialExchange,
  selectedExchanges: undefined,
  setAmount: () => undefined,
  setFirstCurrencyFrom: () => undefined,
  setFirstCurrencyTo: () => undefined,
  setExchangeData: () => {},
}

const CalcContext = createContext<ICalculatorProps>(initialContextState);

CalcContext.displayName = 'CalcContext';

export default CalcContext;
