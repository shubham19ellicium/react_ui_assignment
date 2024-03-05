import React, { useContext, useEffect, useRef, useState } from "react";
import "./SideNav";
import { DataContext } from "../../context/stateData";

const SideNav = (props) => {
  // const { circleFlag, handleStepChange, circleCount, text, title, noneFlag } =
  //   props.data;

  const dataContext = useContext(DataContext);
  const { circleCount, text, title } = props.data;
  const [circle,setCircleRef] = useState({
    circl1: true,
    circl2: false,
    circl3: false,
    circl4: false,
  });
  useEffect(() => {
    switch (dataContext.stepNumber) {
      case 1:
        setCircleRef({
          circl1: true,
          circl2: false,
          circl3: false,
          circl4: false,
        })
        break;

      case 2:
        setCircleRef( {
          circl1: false,
          circl2: true,
          circl3: false,
          circl4: false,
        })
        break;

      case 3:
        setCircleRef( {
          circl1: false,
          circl2: false,
          circl3: true,
          circl4: false,
        })
        break;

      case 4:
        setCircleRef( {
          circl1: false,
          circl2: false,
          circl3: false,
          circl4: true,
        })
        break;

      default:
        break;
    }
  }, [dataContext.stepNumber]);


  return (
    <>
      <div className="step-block">
        <div
          className={
            circle[`circl${circleCount}`] === true
              ? "step-circle-active"
              : "step-circle"
          }
          // onClick={() => handleStepChange.handleStepChange(circleCount)}
          onClick={() => {
            if (dataContext.noneFlag === false) {
              return dataContext.handleStepChange(circleCount);
            }
          }}
        >
          <span>{circleCount}</span>
        </div>
        <div className="step-title-block">
          <p className="step-text">{text}</p>
          <p className="step-title">{title}</p>
        </div>
      </div>
    </>
  );
};

export default SideNav;
