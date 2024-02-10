import { ReactElement, useEffect } from "react"
import { AmountInput, CalculateFooter, Currency } from "./components";
import useCalculator from "../../context/useCalculator";
import getExchangeData from "../../api/getExchangeData";
import resolveExchangeData from "../../api/resolveExchangeData";


const Calculator = (): ReactElement => {
  const { setCurrency } = useCalculator();

  // Fetch data from API https://www.kurzy.cz/html-kody/json/kurzy-bank.htm
  useEffect(() => {
    const exchangeData = async (): Promise<void> => {
      const data = await getExchangeData();
      const resolvedData = resolveExchangeData(data);
      setCurrency(resolvedData);
    };
    
    exchangeData();
  }, [setCurrency]);

  return (
    <div className="flex flex-col items-center gap-10 px-32 py-20 w-full h-1/2 bg-blue rounded-2xl">
      <AmountInput />
      <Currency />
      <CalculateFooter />
    </div>
  );
};

export default Calculator;
 