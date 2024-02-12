import { useCallback, useMemo } from "react";
import useCalculator from "@/context/useCalculator";
import { SingleValue } from "react-select";
import { EReducerVariant } from "@/utils/enums";
import { TExchangeValues } from "@/utils/types";
import { TExchangeData, TMainExchange } from "@/api/customTypes";

type TReturn = {
  exchangeData?: TExchangeData;
  exchangeValues: TExchangeValues;
  handleChange: (newValue: SingleValue<TMainExchange>, variant: EReducerVariant) => void;
}

const useCurrency = (): TReturn => {
  const {
    dispatch,
    exchangeData,
    firstCurrencyFrom,
    firstCurrencyTo,
    selectedExchanges,
  } = useCalculator();

  const handleChange = useCallback((
    selected: SingleValue<TMainExchange>, variant: EReducerVariant
    ): void => {

      const newValue: SingleValue<TMainExchange> = selected;

      if (newValue !== null) {
        dispatch({ type: variant, selected: newValue });
      }
  }, [dispatch]);

  const exchangeValues: TExchangeValues = useMemo(() => {
    const exchangeFrom = selectedExchanges?.from ? selectedExchanges.from : firstCurrencyFrom;
    const exchangeTo = selectedExchanges?.to ? selectedExchanges.to : firstCurrencyTo;

    return { exchangeFrom, exchangeTo }
  }, [firstCurrencyFrom, firstCurrencyTo, selectedExchanges?.from, selectedExchanges?.to])


  return {
    exchangeData, exchangeValues, handleChange,
  };
};
export default useCurrency;
