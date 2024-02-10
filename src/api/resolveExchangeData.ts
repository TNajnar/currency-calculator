import { TCurrencyDetail, TCurrencyExchange, TExchangeValues } from "./customTypes";


const resolveExchangeData = (exchangeData: TCurrencyExchange): Array<TExchangeValues> => {
  const { kurzy } = exchangeData;

  const resolveCurrency: Array<TExchangeValues> = Object.entries(kurzy)
    .reduce((acc: Array<TExchangeValues>, [key, currencyData]) => {
      if (typeof currencyData === 'object' && currencyData !== null) {
        const {
          dev_nakup: buyCurrency, dev_prodej: sellCurrency, nazev
        } = currencyData as TCurrencyDetail;
        const country = `${nazev} (${key})`

        acc.push({ buyCurrency, sellCurrency, country });
      }

        return acc;
      }, [])
  
  return resolveCurrency;

};

export default resolveExchangeData;
