const formatResult = (value: number): string => {
  const formattedValue = value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
}

export const convertMoney = (amount: number, rate: number): string => {
  const convertedValue = amount * rate;

  const roundedValue = Math.round(convertedValue * 100) / 100;
  const formattedValue = formatResult(roundedValue);

  return formattedValue;
};

export const formatAmount = (amount: number): string => {
  const roundedValue = Math.round(amount);
  const formattedValue = formatResult(roundedValue);

  return formattedValue;
};

