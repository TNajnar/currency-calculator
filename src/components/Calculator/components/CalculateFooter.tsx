import { ReactElement } from "react";
import useCalculator from "../../../context/useCalculator";
import { convertMoney, formatAmount } from "../../../utils/moneyUtils";

const CalculateFooter = (): ReactElement => {
  const {
    amount,
    selectedExchanges: { from: { label: fromCurrency }, to: { label: toCurrency, value } },
  } = useCalculator();

  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="text-xl self-start">{formatAmount(amount as number)} {fromCurrency} =</span>
      <span className="text-center">TO</span>
      <span className="text-2xl self-end">
        {convertMoney(amount as number, value)} {toCurrency}
      </span>
    </div>
  );
};

export default CalculateFooter;
