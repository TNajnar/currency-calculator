import { Dispatch, useMemo } from "react";
import useCalculator from "../../../context/useCalculator";
import { TBuy, TSell } from "../../../api/customTypes";
import { TSelectedExchange } from "../../../utils/types";
import { EReducerVariant } from "../../../utils/enums";

type TReturn = {
  handleFrom: Dispatch<TSelectedExchange>;
  handleTo: Dispatch<TSelectedExchange>;
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

    const handleFrom: Dispatch<TSelectedExchange> = (selected): void => {
    dispatch({ type: EReducerVariant.SELECT_FROM, selected });
  };

  const handleTo: Dispatch<TSelectedExchange> = (selected): void => {
    dispatch({ type: EReducerVariant.SELECT_TO, selected });
  };

  return {
    handleFrom, handleTo, resolveBuy, resolveSell,
  };
};

export default useCurrency;
