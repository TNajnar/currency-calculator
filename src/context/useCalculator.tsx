import { useContext } from "react";
import CalcContext, { ICalculatorProps } from "./CalcContext";

const useCalculator = (): ICalculatorProps => useContext(CalcContext);

export default useCalculator;
