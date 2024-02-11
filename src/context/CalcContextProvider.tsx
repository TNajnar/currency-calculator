import { ReactElement, ReactNode, useReducer, useState } from "react";
import CalcContext, { ICalculatorProps } from "./CalcContext";
import { TMainExchange, TExchangeData } from "../api/customTypes";
import { TCurrencyAction } from "../utils/types";
import { EReducerVariant } from "../utils/enums";

interface IProps {
  children: ReactNode;
}

export interface ICurrencyState {
  selectedExchanges: {
    from?: TMainExchange;
    to?: TMainExchange;
  };
}

const currencyReducer = (state: ICurrencyState, action: TCurrencyAction): ICurrencyState => {
  switch (action.type) {
    case EReducerVariant.SELECT_FROM:
      return {
        ...state,
        selectedExchanges: {
          ...state.selectedExchanges,
          from: action.selected,
        },
      };
    case EReducerVariant.SELECT_TO:
      return {
        ...state,
        selectedExchanges: {
          ...state.selectedExchanges,
          to: action.selected,
        },
      };
    // TODO
    // case EReducerVariant.SWAP:
    //   return {
    //     ...state,
    //     selectedExchanges: {
    //       from: state.selectedExchanges.to,
    //       to: state.selectedExchanges.from,
    //     },
    //   };
    default:
      return state;
  }
};

const CalcContextProvider = ({ children }: IProps): ReactElement => {
  const [amount, setAmount] = useState<number | string>(1);
  const [firstCurrencyFrom, setFirstCurrencyFrom] = useState<TMainExchange | undefined>(undefined);
  const [firstCurrencyTo, setFirstCurrencyTo] = useState<TMainExchange | undefined>(undefined);
  const [exchangeData, setExchangeData] = useState<TExchangeData>();
  const [{ selectedExchanges }, dispatch] = useReducer(currencyReducer, {
    selectedExchanges: {
      from: undefined,
      to: undefined,
    },
  });

  const values: ICalculatorProps = {
    amount,
    dispatch,
    firstCurrencyFrom,
    firstCurrencyTo,
    exchangeData,
    selectedExchanges,
    setAmount,
    setExchangeData,
    setFirstCurrencyFrom,
    setFirstCurrencyTo,
  }
  
  return (
    <CalcContext.Provider value={values}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
