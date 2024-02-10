import { TMainExchange } from "../api/customTypes";
import { EReducerVariant } from "./enums";

export type TCurrencyAction = (
  | { type: EReducerVariant.SELECT_FROM; selected: TSelectedExchange }
  | { type: EReducerVariant.SELECT_TO; selected: TSelectedExchange }
)

export type TSelectedExchange = TMainExchange | TMainExchange[] | null;
