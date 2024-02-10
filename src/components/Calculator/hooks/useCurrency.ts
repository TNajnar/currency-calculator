import { useMemo } from "react";
import { SingleValue } from "react-select";
import useCalculator from "../../../context/useCalculator";
import { TBuy, TMainExchange, TSell } from "../../../api/customTypes";
import { EReducerVariant } from "../../../utils/enums";

type TReturn = {
  handleFrom: (newValue: SingleValue<TMainExchange>) => void;
  handleTo: (newValue: SingleValue<TMainExchange>) => void;
  resolveBuy: Array<TBuy>;
  resolveSell: Array<TSell>;
}

const useCurrency = (): TReturn => {
  const { currency, dispatch } = useCalculator();

  const resolveBuy: Array<TBuy> = useMemo<Array<TBuy>>(() => {
    const getExchange: Array<TBuy> = currency
      .reduce((acc: Array<TBuy>, { buyCurrency, country }) => {
        acc.push({ label: country, value: buyCurrency });

        return acc;
      }, [],
    );

    return getExchange;
  }, [currency]);

  const resolveSell = useMemo<Array<TSell>>(() => {
    const getExchange: Array<TSell> = currency
      .reduce((acc: Array<TSell>, { country, sellCurrency }) => {
        acc.push({ label: country, value: sellCurrency });

        return acc;
      }, [],
    );

    return getExchange;
  }, [currency]);

    const handleFrom = (selected: SingleValue<TMainExchange>): void => {
      const newValue: SingleValue<TMainExchange> = selected;

      if (newValue !== null) {
        dispatch({ type: EReducerVariant.SELECT_FROM, selected: newValue });
      }
  };

  const handleTo = (selected: SingleValue<TMainExchange>): void => {
    const newValue: SingleValue<TMainExchange> = selected;

    if (newValue !== null) {
      dispatch({ type: EReducerVariant.SELECT_TO, selected: newValue });
    }
  };

  return {
    handleFrom, handleTo, resolveBuy, resolveSell,
  };
};

export default useCurrency;
