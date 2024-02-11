const convertMoney = (amount: number, rate: number): number => {
  const convertedValue = amount * rate;

  const roundedValue = Math.round(convertedValue * 100) / 100;
  return roundedValue;
};

export default convertMoney;
