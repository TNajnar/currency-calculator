import { ReactElement, ReactNode, useState } from "react";
import CalcContext from "./CalcContext";

interface IProps {
  children: ReactNode;
}

const CalcContextProvider = ({ children }: IProps): ReactElement => {
  const [amount, setAmount] = useState<number | string>('');
  
  return (
    <CalcContext.Provider value={{ amount, setAmount }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
