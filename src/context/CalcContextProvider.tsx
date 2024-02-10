import { ReactElement, ReactNode, useState } from "react";
import CalcContext from "./CalcContext";
import { TExchangeValues } from "../api/customTypes";

interface IProps {
  children: ReactNode;
}

const CalcContextProvider = ({ children }: IProps): ReactElement => {
  const [amount, setAmount] = useState<number | string>('');
  const [currency, setCurrency] = useState<Array<TExchangeValues>>([]);
  
  return (
    <CalcContext.Provider value={{ amount, currency, setAmount, setCurrency }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
