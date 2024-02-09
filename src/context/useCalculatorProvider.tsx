import { useContext } from "react";
import CalcContext, { ICalculatorProps } from "./CalcContext";

const useCalculatorProvider = (): ICalculatorProps => useContext(CalcContext);

export default useCalculatorProvider;
