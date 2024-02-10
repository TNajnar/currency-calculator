/* #region Exchange currency API */

export type TCurrencyDetail = {
  dev_nakup: number;
  dev_prodej: number;
  dev_stred: number;
  jednotka: number;
  nazev: string;
  url: string;
  val_nakup: number | null;
  val_prodej: number | null;
  val_stred: number | null;
}

export type TCurrencyExchange = {
  banka: string;
  den: string;
  denc: string;
  kurzy: TCurrencyDetail;
  url: string;
}

/* #endregion */

/* #region Resolved */

export type TMainExchange = {
  label: string;
  value: number;
}

export type TBuy = TMainExchange;

export type TSell = TMainExchange;

export type TExchangeValues = {
  buyCurrency: number;
  country: string;
  sellCurrency: number;
}

/* #endregion */
