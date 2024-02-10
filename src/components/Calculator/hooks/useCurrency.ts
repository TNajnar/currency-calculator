import { useMemo } from "react";
import useCalculatorProvider from "../../../context/useCalculatorProvider";
import { TBuy, TSell } from "../../../api/customTypes";

type TReturn = {
  resolveBuy: Array<TBuy>;
  resolveSell: Array<TSell>;
}

const useCurrency = (): TReturn => {
  const { currency } = useCalculatorProvider();

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

  return {
    resolveBuy, resolveSell,
  }
}

export default useCurrency;
