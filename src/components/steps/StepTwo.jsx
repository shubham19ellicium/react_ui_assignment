import React, { useContext, useEffect, useRef, useState } from "react";
import archadeImage from "../../assets/images/icon-arcade.svg";
import advanceImage from "../../assets/images/icon-advanced.svg";
import proImage from "../../assets/images/icon-pro.svg";
import { formatString } from "../../commonUtil/CommonUtil";
import { DataContext } from "../../context/stateData";

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

  const [plainErrorFlag, setPlainErrorFlag] = useState(false);

  const [selectPlain, setSelectPlain] = useState("");
  const [selectPlainDuration, setSelectPlainDuration] = useState("monthly");
  const [selectPlainUI, setSelectPlainUI] = useState(null);
  const [selectedPlainPrice, setSelectedPlainPrice] = useState(0);

  // const selectPlainRef = useRef("")

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
        setSelectPlainUI(0);
        setSelectPlain("Arcade");
        dataContext.selectPlainRef.current = "Arcade";
        setSelectedPlainPrice(
          selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.archad_plan
            : YEARLY_PRICE.archad_plan
        );
        break;

      case 2:
        setSelectPlainUI(1);
        setSelectPlain("Advance");
        dataContext.selectPlainRef.current = "Advance";
        setSelectedPlainPrice(
          selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.advance_plan
            : YEARLY_PRICE.advance_plan
        );
        break;

      case 3:
        setSelectPlainUI(2);
        setSelectPlain("Pro");
        dataContext.selectPlainRef.current = "Pro";
        setSelectedPlainPrice(
          selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.pro_plan
            : YEARLY_PRICE.pro_plan
        );
        break;

      default:
        setSelectPlainUI(0);
        setSelectPlain("Arcade");
        dataContext.selectPlainRef("Arcade");
        break;
    }
  };

  const handleChangePlainDuration = (e) => {
    if (e.target.checked === true) {
      dataContext.selectPlainPriceRef.current = "yearly"
      setSelectPlainDuration("yearly");
    } else {
      dataContext.selectPlainPriceRef.current = "monthly"
      setSelectPlainDuration("monthly");

    }
  };

  const increment = () => {
    dataContext.setSelectPlain(selectPlain);
    dataContext.setSelectPlainDuration(selectPlainDuration);
    dataContext.setSelectedPlainPrice(selectedPlainPrice);
    // dataContext.setSelectPlainUI(selectPlainUI);
    dataContext.handleIncrementStepChange();
  };

  const handleSubmitPlain = () => {
    let plain = selectPlain;
    let duration = selectPlainDuration;
    if (plain.length === 0 || duration.length === 0) {
      setPlainErrorFlag(true);
    } else {
      increment();
    }
  };

  useEffect(() => {
    switch (selectPlain) {
      case "Arcade":
        setSelectedPlainPrice(
          selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.archad_plan
            : YEARLY_PRICE.archad_plan
        );
        break;

      case "Advance":
        setSelectedPlainPrice(
          selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.advance_plan
            : YEARLY_PRICE.advance_plan
        );
        break;

      case "Pro":
        setSelectedPlainPrice(
          selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.pro_plan
            : YEARLY_PRICE.pro_plan
        );
        break;

      default:
        break;
    }
  }, [selectPlain, selectPlainDuration]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    setSelectPlainDuration(dataContext.selectPlainPriceRef.current);
    if (dataContext.selectPlainRef.current !== "") {
      switch (dataContext.selectPlainRef.current) {
        case "Arcade":
          setSelectPlainUI(0);
          setSelectPlain("Arcade");
          setSelectedPlainPrice(
            dataContext.selectPlainPriceRef.current === "monthly"
              ? MONTHLY_PRICE.archad_plan
              : YEARLY_PRICE.archad_plan
          );
          break;

        case "Advance":
          setSelectPlainUI(1);
          setSelectPlain("Advance");
          setSelectedPlainPrice(
            dataContext.selectPlainPriceRef.current === "monthly"
              ? MONTHLY_PRICE.advance_plan
              : YEARLY_PRICE.advance_plan
          );
          break;

        case "Pro":
          setSelectPlainUI(2);
          setSelectPlain("Pro");
          setSelectedPlainPrice(
            dataContext.selectPlainPriceRef.current === "monthly"
              ? MONTHLY_PRICE.pro_plan
              : YEARLY_PRICE.pro_plan
          );
          break;

        default:
          setSelectPlainUI(0);
          setSelectPlain("Arcade");
          break;
      }
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    selectPlainUI === 0
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
                        {selectPlainDuration === "monthly"
                          ? formatString("month", MONTHLY_PRICE.archad_plan)
                          : formatString("year", YEARLY_PRICE.archad_plan)}
                      </span>
                      <br />
                      <span className="selection-details-span">
                        {selectPlainDuration === "yearly" && "2 months free"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  // className="selection-block"
                  className={
                    selectPlainUI === 1
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
                        {selectPlainDuration === "monthly"
                          ? formatString("month", MONTHLY_PRICE.advance_plan)
                          : formatString("year", YEARLY_PRICE.advance_plan)}
                      </span>
                      <br />
                      <span className="selection-details-span">
                        {selectPlainDuration === "yearly" && "2 months free"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  // className="selection-block"
                  className={
                    selectPlainUI === 2
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
                        {selectPlainDuration === "monthly"
                          ? formatString("month", MONTHLY_PRICE.pro_plan)
                          : formatString("year", YEARLY_PRICE.pro_plan)}
                      </span>
                      <br />
                      <span className="selection-details-span">
                        {selectPlainDuration === "yearly" && "2 months free"}
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
                      checked={selectPlainDuration === "yearly" || dataContext.selectPlainPriceRef.current === "yearly"}
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
