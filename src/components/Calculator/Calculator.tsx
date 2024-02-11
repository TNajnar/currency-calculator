import { ReactElement, useEffect } from "react"
import { AmountInput, CalculateFooter, Currency } from "./components";
import useCalculator from "../../context/useCalculator";
import getExchangeData from "../../api/getExchangeData";
import { ERoutes } from "../../utils/enums";

const API_KEY = process.env.API_KEY;

const Calculator = (): ReactElement => {
  const { selectedExchanges: { from: { code: fromCode } }, setExchangeData } = useCalculator();
  // Create url
  const endpoint = ERoutes.API_ENDPOINT
    .replace('{key}', API_KEY || '')
    .replace('{base}', fromCode || 'CZK');

  // Fetch data from API
  useEffect(() => {
    const exchangeData = async (): Promise<void> => {
      const data = await getExchangeData(endpoint);
      setExchangeData(data);
    };
    
    exchangeData();
  }, [setExchangeData, fromCode, endpoint]);

  return (
    <div className="flex flex-col items-center gap-10 px-28 py-20 w-full h-fit bg-blue rounded-2xl">
      <AmountInput />
      <Currency />
      <CalculateFooter />
    </div>
  );
};

export default Calculator;
 