import { useCallback, useMemo } from "react";
import { SingleValue } from "react-select";
import useCalculator from "../../../../context/useCalculator";
import { TExchangeData, TMainExchange } from "../../../../api/customTypes";
import { EReducerVariant } from "../../../../utils/enums";
import { TExchangeValues } from "../../../../utils/types";

type TReturn = {
  exchangeData?: TExchangeData;
  handleChange: (newValue: SingleValue<TMainExchange>, variant: EReducerVariant) => void;
  initialValues: TExchangeValues;
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

  const initialValues: TExchangeValues = useMemo(() => {
    const exchangeFrom = selectedExchanges?.from ? selectedExchanges.from : firstCurrencyFrom;
    const exchangeTo = selectedExchanges?.to ? selectedExchanges.to : firstCurrencyTo;

    return { exchangeFrom, exchangeTo }
  }, [firstCurrencyFrom, firstCurrencyTo, selectedExchanges?.from, selectedExchanges?.to])


  return {
    exchangeData, handleChange, initialValues
  };
};
export default useCurrency;
