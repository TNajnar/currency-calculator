/* #region Exchange currency API */

/* #endregion */

/* #region Resolved */

export type TMainExchange = {
  code: string;
  label: string;
  value: number;
}

/* #endregion */

export type TExchangeData = {
  baseCurrencyRate: string;
  rates: Array<TMainExchange>;
};

export type TExchangeApiData = {
  baseCurrencyRate: string;
  conversion_rates: Record<string, number>;
};
