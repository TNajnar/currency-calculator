import { ReactElement, useMemo } from "react";
import useCalculator from "../../../context/useCalculator";
import { convertMoney, formatAmount } from "../../../utils/moneyUtils";
import { TExchangeValues } from "../../../utils/types";

const CalculateFooter = (): ReactElement => {
  const {
    amount, firstCurrencyFrom, firstCurrencyTo, selectedExchanges,
  } = useCalculator();

  const initialValues: TExchangeValues = useMemo(() => {
    const exchangeFrom = selectedExchanges?.from ? selectedExchanges.from : firstCurrencyFrom;
    const exchangeTo = selectedExchanges?.to ? selectedExchanges.to : firstCurrencyTo;

    return { exchangeFrom, exchangeTo }
  }, [firstCurrencyFrom, firstCurrencyTo, selectedExchanges?.from, selectedExchanges?.to])

  const {exchangeFrom, exchangeTo} = initialValues;


  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="text-xl self-start">
        {formatAmount(amount as number)} {exchangeFrom?.label} =
      </span>

      <span className="text-center">TO</span>

      <span className="text-2xl self-end">
        {convertMoney(amount as number, exchangeTo?.value as number)} {exchangeTo?.label}
      </span>
    </div>
  );
};

export default CalculateFooter;
