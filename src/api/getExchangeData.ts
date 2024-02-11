import { TMainExchange, TExchangeData } from "./customTypes";
import resolveExchangeData from "./resolveExchangeData";

const getExchangeData = async (apiEndpoint: string): Promise<TExchangeData> => {
  try {
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('No exchange data.');
    }

    const data = await response.json();

    const { base_code: baseCurrencyRate, conversion_rates } = data;
    const rates: Array<TMainExchange> = resolveExchangeData(conversion_rates);
    const updatedExchangeData: TExchangeData = { baseCurrencyRate, rates };

    console.log(updatedExchangeData)

    return updatedExchangeData;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    return Promise.resolve({} as TExchangeData);
  }
};

export default getExchangeData;
