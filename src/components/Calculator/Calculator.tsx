import { ReactElement, useCallback, useEffect } from "react"
import useCalculator from "@/context/useCalculator";
import getExchangeData from "@/api/getExchangeData";
import { AmountInput, CalculateFooter, Currency } from "./components";
import { CURRENCIES } from "@/utils/consts";
import { ERoutes } from "@/utils/enums";
import { TMainExchange } from "@/api/customTypes";

const API_KEY = process.env.API_KEY;

const Calculator = (): ReactElement => {
  const {
    selectedExchanges,
    setFirstCurrencyFrom,
    setFirstCurrencyTo,
    setExchangeData,
  } = useCalculator();

  const getInitialValue = useCallback((rates: Array<TMainExchange>, isFrom: boolean) => {
    const initialValueFrom = rates.find((country) => country.code === CURRENCIES[4].code);
    const initialValueTo = rates.find((country) => country.code === CURRENCIES[5].code);

    return isFrom
      ? setFirstCurrencyFrom(initialValueFrom as TMainExchange)
      : setFirstCurrencyTo(initialValueTo as TMainExchange);
  }, [setFirstCurrencyFrom, setFirstCurrencyTo])

  // Create url
  const endpoint = ERoutes.API_ENDPOINT
    .replace('{key}', API_KEY || '')
    .replace('{base}', CURRENCIES[4].code); // CZK
    
    // Fetch data from API
    useEffect(() => {
      const exchangeData = async (): Promise<void> => {
        const data = await getExchangeData(endpoint);
        setExchangeData(data);
      if (!selectedExchanges?.from) {
        getInitialValue(data.rates, true);
      }
      if (!selectedExchanges?.to) {
        getInitialValue(data.rates, false);
      }
    };
    
    exchangeData();
  }, [
      endpoint,
      getInitialValue,
      selectedExchanges?.from,
      selectedExchanges?.to,
      setExchangeData,
      setFirstCurrencyFrom,
      setFirstCurrencyTo,
    ]
  );

  return (
    <div className="flex flex-col items-center gap-10 px-28 py-20 w-full h-fit bg-blue rounded-2xl">
      <AmountInput />
      <Currency />
      <CalculateFooter />
    </div>
  );
};

export default Calculator;
 