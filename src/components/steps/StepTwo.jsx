import React, { useContext, useEffect, useState } from "react";
import archadeImage from "../../assets/images/icon-arcade.svg";
import advanceImage from "../../assets/images/icon-advanced.svg";
import proImage from "../../assets/images/icon-pro.svg";
import { formatString } from "../../commonUtil/CommonUtil";
import { DataContext } from "../../context/stateData";
import { SelectPlainContext } from "../../context/selectPlainContext";

let MONTHLY_PRICE = {
  archad_plan: 9,
  advance_plan: 12,
  pro_plan: 15,
  online_service: 1,
  large_service: 2,
  custom_service: 2,
};
let YEARLY_PRICE = {
  archad_plan: 90,
  advance_plan: 120,
  pro_plan: 150,
  online_service: 10,
  large_service: 20,
  custom_service: 20,
};
const StepTwo = () => {
  const dataContext = useContext(DataContext);
  const selectPlanContext = useContext(SelectPlainContext);
  const [plainErrorFlag, setPlainErrorFlag] = useState(false);

  const handleSelectCard = (target) => {
    setPlainErrorFlag(false);
    // for (var i = 1; i <= 3; i++) {
    //   var selectedOption = document.getElementById("selection-" + i);
    //   selectedOption.classList.remove("active");
    // }
    // var myOption = document.getElementById("selection-" + target);
    // myOption.classList.add("active");

    switch (target) {
      case 1:
        console.log("------------------------------");
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectPlainUI: 0,
            selectPlain: "Arcade",
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.archad_plan
                : YEARLY_PRICE.archad_plan,
          };
          return data;
        });
        // selectPlanContext.setSelectPlainUI(0);
        // selectPlanContext.setSelectPlain("Arcade");
        // selectPlanContext.setSelectedPlainPrice(
        //   selectPlanContext.selectPlainDuration === "monthly"
        //     ? MONTHLY_PRICE.archad_plan
        //     : YEARLY_PRICE.archad_plan
        // );
        break;

      case 2:
        console.log("------------------------------");
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectPlainUI: 1,
            selectPlain: "Advance",
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.advance_plan
                : YEARLY_PRICE.advance_plan,
          };
          return data;
        });
        // console.log("------------------------------");
        // selectPlanContext.setSelectPlainUI(1);
        // selectPlanContext.setSelectPlain("Advance");
        // selectPlanContext.setSelectedPlainPrice(
        //   selectPlanContext.selectPlainDuration === "monthly"
        //     ? MONTHLY_PRICE.advance_plan
        //     : YEARLY_PRICE.advance_plan
        // );
        break;

      case 3:
        console.log("------------------------------");
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectPlainUI: 2,
            selectPlain: "Pro",
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.pro_plan
                : YEARLY_PRICE.pro_plan,
          };
          return data;
        });
        // console.log("------------------------------");
        // selectPlanContext.setSelectPlainUI(2);
        // selectPlanContext.setSelectPlain("Pro");
        // selectPlanContext.setSelectedPlainPrice(
        //   selectPlanContext.selectPlainDuration === "monthly"
        //     ? MONTHLY_PRICE.pro_plan
        //     : YEARLY_PRICE.pro_plan
        // );
        break;

      default:
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectPlainUI: 0,
            selectPlain: "Arcade",
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.archad_plan
                : YEARLY_PRICE.archad_plan,
          };
          return data;
        });
        break;
    }
  };

  const handleChangePlainDuration = (e) => {
    if (e.target.checked === true) {
      // selectPlanContext.setSelectPlainDuration("yearly");
      selectPlanContext.setSelectPlanObject((prev) => {
        let data = {
          ...prev,
          selectPlainDuration: "yearly",
        };
        return data;
      });
    } else {
      selectPlanContext.setSelectPlanObject((prev) => {
        let data = {
          ...prev,
          selectPlainDuration: "monthly",
        };
        return data;
      });
      // selectPlanContext.setSelectPlainDuration("monthly");
    }
  };

  const increment = () => {
    dataContext.handleIncrementStepChange();
  };

  const handleSubmitPlain = () => {
    let plain = selectPlanContext.selectPlanObject.selectPlain;
    let duration = selectPlanContext.selectPlanObject.selectPlainDuration;
    if (plain.length === 0 || duration.length === 0) {
      setPlainErrorFlag(true);
    } else {
      increment();
    }
  };

  useEffect(() => {
    switch (selectPlanContext.selectPlanObject.selectPlain) {
      case "Arcade":
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.archad_plan
                : YEARLY_PRICE.archad_plan,
          };
          return data;
        });
        // selectPlanContext.setSelectedPlainPrice(
        //   selectPlanContext.selectPlainDuration === "monthly"
        //     ? MONTHLY_PRICE.archad_plan
        //     : YEARLY_PRICE.archad_plan
        // );
        break;

      case "Advance":
        // selectPlanContext.setSelectedPlainPrice(
        //   selectPlanContext.selectPlainDuration === "monthly"
        //     ? MONTHLY_PRICE.advance_plan
        //     : YEARLY_PRICE.advance_plan
        // );
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.advance_plan
                : YEARLY_PRICE.advance_plan,
          };
          return data;
        });
        break;

      case "Pro":
        // selectPlanContext.setSelectedPlainPrice(
        //   selectPlanContext.selectPlainDuration === "monthly"
        //     ? MONTHLY_PRICE.pro_plan
        //     : YEARLY_PRICE.pro_plan
        // );
        selectPlanContext.setSelectPlanObject((prev) => {
          let data = {
            ...prev,
            selectedPlainPrice:
              selectPlanContext.selectPlanObject.selectPlainDuration ===
              "monthly"
                ? MONTHLY_PRICE.pro_plan
                : YEARLY_PRICE.pro_plan,
          };
          return data;
        });
        break;

      default:
        break;
    }
  }, [selectPlanContext.selectPlanObject.selectPlainDuration]);

  return (
    <>
      <div className="select-plan-block" id="select-plan-id">
        <div className="form-content-block">
          <div className="head-and-info-wrapper">
            <div className="form-header">
              <h2>Select your plan</h2>
              <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className="form-block-container">
              <div className="selection-block-container">
                <div
                  className={
                    selectPlanContext.selectPlanObject.selectPlainUI === 0
                      ? "selection-block active-select-block"
                      : "selection-block"
                  }
                  onClick={() => handleSelectCard(1)}
                  id="selection-1"
                >
                  <div className="selection-image">
                    <img src={archadeImage} alt="" />
                  </div>
                  <div className="selection-details">
                    <h5 className="selection-details-header">Arcade</h5>
                    <p className="selection-details-p" id="arcade-price"></p>
                    <div
                      className="selection-span-wrapper-block"
                      id="selection-span-wrapper-1"
                    >
                      <span
                        id="price-1"
                        className="selection-details-price-span"
                      >
                        {selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
                          ? formatString("month", MONTHLY_PRICE.archad_plan)
                          : formatString("year", YEARLY_PRICE.archad_plan)}
                      </span>
                      <br />
                      <span className="selection-details-span">
                        {selectPlanContext.selectPlanObject.selectPlainDuration === "yearly" &&
                          "2 months free"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  // className="selection-block"
                  className={
                    selectPlanContext.selectPlanObject.selectPlainUI === 1
                      ? "selection-block active-select-block"
                      : "selection-block"
                  }
                  onClick={() => handleSelectCard(2)}
                  id="selection-2"
                >
                  <div className="selection-image">
                    <img src={advanceImage} alt="" />
                  </div>
                  <div className="selection-details">
                    <h5 className="selection-details-header">Advanced</h5>
                    <p className="selection-details-p" id="arcade-price"></p>
                    <div
                      className="selection-span-wrapper-block"
                      id="selection-span-wrapper-1"
                    >
                      <span
                        id="price-2"
                        className="selection-details-price-span"
                      >
                        {selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
                          ? formatString("month", MONTHLY_PRICE.advance_plan)
                          : formatString("year", YEARLY_PRICE.advance_plan)}
                      </span>
                      <br />
                      <span className="selection-details-span">
                        {selectPlanContext.selectPlanObject.selectPlainDuration === "yearly" &&
                          "2 months free"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  // className="selection-block"
                  className={
                    selectPlanContext.selectPlanObject.selectPlainUI === 2
                      ? "selection-block active-select-block"
                      : "selection-block"
                  }
                  onClick={() => handleSelectCard(3)}
                  id="selection-3"
                >
                  <div className="selection-image">
                    <img src={proImage} alt="" />
                  </div>
                  <div className="selection-details">
                    <h5 className="selection-details-header">Pro</h5>
                    <p className="selection-details-p" id="arcade-price"></p>
                    <div
                      className="selection-span-wrapper-block"
                      id="selection-span-wrapper-1"
                    >
                      <span
                        id="price-3"
                        className="selection-details-price-span"
                      >
                        {selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
                          ? formatString("month", MONTHLY_PRICE.pro_plan)
                          : formatString("year", YEARLY_PRICE.pro_plan)}
                      </span>
                      <br />
                      <span className="selection-details-span">
                        {selectPlanContext.selectPlanObject.selectPlainDuration === "yearly" &&
                          "2 months free"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-label-error-addon">
                <span id="error-package" className="package-error-message">
                  {plainErrorFlag && "Please select plan"}
                </span>
              </div>
              <div className="period-selection-block">
                <div className="period-selection-detials">
                  <h5>Monthly</h5>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="period-check"
                      id="period-check-id"
                      onChange={handleChangePlainDuration}
                      checked={
                        selectPlanContext.selectPlanObject.selectPlainDuration === "yearly"
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                  <h5>Yearly</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-block">
          <div className="next-button-block">
            <div className="go-back-block">
              <span onClick={dataContext.handleDecrementStepChange}>
                Go Back
              </span>
            </div>
            <button className="next-button" onClick={handleSubmitPlain}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
