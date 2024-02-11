/* #region Exchange */

export type TMainExchange = {
  code: string;
  label: string;
  value: number;
}

export type TExchangeData = {
  baseCurrencyRate: string;
  rates: Array<TMainExchange>;
};

export type TExchangeApiData = {
  baseCurrencyRate: string;
  conversion_rates: Record<string, number>;
};

/* #endregion */
