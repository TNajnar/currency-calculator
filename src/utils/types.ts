import { TMainExchange } from "../api/customTypes";
import { EReducerVariant } from "./enums";

export type TCurrencyAction = (
  | { type: EReducerVariant.SELECT_FROM; selected: TMainExchange }
  | { type: EReducerVariant.SELECT_TO; selected: TMainExchange }
)

export type TCurrency = {
  code: string;
  label: string;
}
