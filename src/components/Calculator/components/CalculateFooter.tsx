import { ReactElement } from "react";
import useCalculator from "../../../context/useCalculator";
import convertMoney from "../../../utils/convert";

const CalculateFooter = (): ReactElement => {
  const {
    amount,
    selectedExchanges: { from: { label: fromCurrency }, to: { label: toCurrency, value } },
  } = useCalculator();

  return (
    <div className="flex flex-col">
      <span>{amount} {fromCurrency}</span>
      <span className="text-center">TO</span>
      <span>{convertMoney(amount as number, value)} {toCurrency}</span>
    </div>
  );
};

export default CalculateFooter;
