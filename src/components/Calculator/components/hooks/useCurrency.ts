import { SingleValue } from "react-select";
import useCalculator from "../../../../context/useCalculator";
import { TMainExchange } from "../../../../api/customTypes";
import { EReducerVariant } from "../../../../utils/enums";

type TReturn = {
  handleFrom: (newValue: SingleValue<TMainExchange>) => void;
  handleTo: (newValue: SingleValue<TMainExchange>) => void;
}

const useCurrency = (): TReturn => {
  const { dispatch } = useCalculator();

  const handleFrom = (selected: SingleValue<TMainExchange>): void => {
    const newValue: SingleValue<TMainExchange> = selected;

    if (newValue !== null) {
      dispatch({ type: EReducerVariant.SELECT_FROM, selected: newValue });
    }
  };

  const handleTo = (selected: SingleValue<TMainExchange>): void => {
    const newValue: SingleValue<TMainExchange> = selected;

    if (newValue !== null) {
      dispatch({ type: EReducerVariant.SELECT_TO, selected: newValue });
    }
  };

  return {
    handleFrom, handleTo
  };
};

export default useCurrency;
