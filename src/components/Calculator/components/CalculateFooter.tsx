import { ReactElement } from "react";
import useCalculator from "../../../context/useCalculator";

const CalculateFooter = (): ReactElement => {
  const {
    amount,
    selectedExchanges: { from: { label: fromCurrency }, to: { label: toCurrency } },
  } = useCalculator();

  console.log(fromCurrency)
  return (
    <div className="flex flex-col">
      <span>{amount} {fromCurrency}</span>
      <span className="text-center">TO</span>
      <span>{toCurrency}</span>
    </div>
  );
};

export default CalculateFooter;
