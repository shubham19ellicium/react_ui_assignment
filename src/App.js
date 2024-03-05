import { useContext, useEffect, useState } from "react";
import "./App.css";
import RenderForms from "./components/renderFormComponent/RenderForms";
import SideNav from "./components/sidebarCircleNav/SideNav";
import DataProvider, { DataContext } from "./context/stateData";

function App() {
  // const [stepNumber, setStepNumber] = useState(1);
  // const [circleFlag, setCircleFlag] = useState({
  //   circl1: true,
  //   circl2: false,
  //   circl3: false,
  //   circl4: false,
  // });
  // const [selectScope, setSelectScope] = useState(1)

  // const [noneFlag, setNonFlag] = useState(false)

  // const handleStepChange = (target) => {
  //   if (selectScope >= parseInt(target)) {
  //     setStepNumber(target);
  //   }
  // };

  // const handleIncrementStepChange = (e) => {
  //   setStepNumber((prev) => prev + 1);
  //   setSelectScope((prev) => prev + 1)
  // };

  // const handleDecrementStepChange = (e) => {
  //   setStepNumber((prev) => prev - 1);
  // };

  // useEffect(() => {
  //   switch (stepNumber) {
  //     case 1:
  //       setCircleFlag({
  //         circl1: true,
  //         circl2: false,
  //         circl3: false,
  //         circl4: false,
  //       });
  //       break;

  //     case 2:
  //       setCircleFlag({
  //         circl1: false,
  //         circl2: true,
  //         circl3: false,
  //         circl4: false,
  //       });
  //       break;

  //     case 3:
  //       setCircleFlag({
  //         circl1: false,
  //         circl2: false,
  //         circl3: true,
  //         circl4: false,
  //       });
  //       break;

  //     case 4:
  //       setCircleFlag({
  //         circl1: false,
  //         circl2: false,
  //         circl3: false,
  //         circl4: true,
  //       });
  //       break;

  //     default:
  //       break;
  //   }

  // }, [stepNumber]);

  return (
    <DataProvider>
      <div className="main-container">
        <div className="container">
          <div className="left-block">
            <div className="steps-container">
              <SideNav data={{
                // circleFlag: { circleFlag },
                // handleStepChange: { handleStepChange },
                circleCount: 1,
                text: "STEP 1",
                title: "YOUR INFO",
                // noneFlag: noneFlag
              }} />
              <SideNav data={{
                // circleFlag: { circleFlag },
                // handleStepChange: { handleStepChange },
                circleCount: 2,
                text: "STEP 2",
                title: "SELECT PLAN",
                // noneFlag: noneFlag
              }} />
              <SideNav data={{
                // circleFlag: { circleFlag },
                // handleStepChange: { handleStepChange },
                circleCount: 3,
                text: "STEP 3",
                title: "SELECT PLAN",
                // noneFlag: noneFlag
              }} />
              <SideNav data={{
                // circleFlag: { circleFlag },
                // handleStepChange: { handleStepChange },
                circleCount: 4,
                text: "STEP 4",
                title: "SELECT PLAN",
                // noneFlag: noneFlag
              }} />
            </div>
          </div>
          <div className="right-block">
            <div className="form-wrapper">
              <RenderForms
                // stepNumber={stepNumber}
                // handleStepChange={handleStepChange}
                // handleIncrementStepChange={handleIncrementStepChange}
                // handleDecrementStepChange={handleDecrementStepChange}
                // handleStepFlag={setNonFlag}
              />
            </div>
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
