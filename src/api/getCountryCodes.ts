type TCountryApi = Array<Array<string>>;

const API_KEY = process.env.API_KEY;
const apiEndpoint = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;

const getCountryCodes = async (): Promise<TCountryApi> => {
  try {
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('No country codes data.');
    }

    const data = await response.json();
    const { supported_codes: countryCodes } = data;

    return countryCodes;
  } catch (error) {
    console.error(`Failed to fetch country codes: ${error}`);
    return Promise.resolve({} as TCountryApi);
  }
};

export default getCountryCodes;
