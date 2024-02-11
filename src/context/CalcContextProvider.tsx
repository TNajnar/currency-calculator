import { ReactElement, ReactNode, useReducer, useState } from "react";
import CalcContext from "./CalcContext";
import { TMainExchange, TExchangeData } from "../api/customTypes";
import { TCurrencyAction } from "../utils/types";
import { EReducerVariant } from "../utils/enums";
import { CURRENCIES } from "../utils/consts";

interface IProps {
  children: ReactNode;
}

export interface ICurrencyState {
  selectedExchanges: {
    from: TMainExchange;
    to: TMainExchange;
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
    default:
      return state;
  }
};

const CalcContextProvider = ({ children }: IProps): ReactElement => {
  const [amount, setAmount] = useState<number | string>(1);
  const [exchangeData, setExchangeData] = useState<TExchangeData>();
  const [{ selectedExchanges }, dispatch] = useReducer(currencyReducer, {
    selectedExchanges: {
      from: { code: CURRENCIES[3].code, label: CURRENCIES[3].label, value: 1 },
      to: { code: CURRENCIES[4].code, label: CURRENCIES[4].label, value: 0.04 },
    },
  });
  
  return (
    <CalcContext.Provider
      value={{ amount, dispatch, exchangeData, selectedExchanges, setAmount, setExchangeData }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
