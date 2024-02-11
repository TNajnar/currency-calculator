import { CURRENCIES } from "../utils/consts";
import { TMainExchange, TExchangeApiData } from "./customTypes";

const resolveExchangeData = (rates: TExchangeApiData['conversion_rates']): Array<TMainExchange> => {
  const getRates: Array<TMainExchange> = Object.entries(rates)
    .reduce((acc: Array<TMainExchange>, [code, value]) => {
      const roundedValue = Math.round(value * 100) / 100;
      const currencyInfo = CURRENCIES.find((currency) => currency.code === code);

      if (currencyInfo) {
        const label = `${currencyInfo.label} (${code})`;
        acc.push({ code: code, label, value: roundedValue });
      }
      
      return acc;
    }, [])

  return getRates ?? [];
};

export default resolveExchangeData;
