import { ReactElement, ReactNode, useReducer, useState } from "react";
import CalcContext from "./CalcContext";
import { TExchangeValues } from "../api/customTypes";
import { TCurrencyAction, TSelectedExchange } from "../utils/types";
import { EReducerVariant } from "../utils/enums";

interface IProps {
  children: ReactNode;
}

export interface ICurrencyState {
  selectedExchanges: {
    from: TSelectedExchange;
    to: TSelectedExchange;
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
  const [amount, setAmount] = useState<number | string>('');
  const [currency, setCurrency] = useState<Array<TExchangeValues>>([]);
  const [{ selectedExchanges }, dispatch] = useReducer(currencyReducer, {
    selectedExchanges: {
      from: null,
      to: null,
    },
  });
  
  return (
    <CalcContext.Provider
      value={{ amount, currency, dispatch, selectedExchanges, setAmount, setCurrency }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
