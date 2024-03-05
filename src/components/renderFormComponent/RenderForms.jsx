import { useContext } from "react";
import { DataContext } from "../../context/stateData";
import StepOne from "../steps/StepOne";
import "./RenderForms.css";
import StepTwo from "../steps/StepTwo";
import StepThree from "../steps/StepThree";
import StepFour from "../steps/StepFour";
import StepFive from "../steps/StepFive";

const RenderForms = (props) => {
  const dataContext = useContext(DataContext);
  switch (dataContext.stepNumber) {
    case 1:
      return <StepOne />;

    case 2:
      return <StepTwo />;

    case 3:
      return <StepThree />;

    case 4:
      return <StepFour />;

    case 5:
      return <StepFive />;

    default:
      break;
  }
};

export default RenderForms;
