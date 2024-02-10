import { TCurrencyExchange } from "./customTypes";

const apiEndpoint = "https://data.kurzy.cz/json/meny/b[2]den[20201231].json";

const getExchangeData = async (): Promise<TCurrencyExchange> => {
  try {
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('No exchange data.');
    }

    const data = await response.json();

    return data as TCurrencyExchange;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    return Promise.resolve({} as TCurrencyExchange);
  }
};

export default getExchangeData;
