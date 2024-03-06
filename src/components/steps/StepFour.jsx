import React, { useContext } from "react";
import { formatString } from "../../commonUtil/CommonUtil";
import { DataContext } from "../../context/stateData";
import DisplaySummary from "../summaryDisplay/DisplaySummary";

const StepFour = () => {
  const dataContext = useContext(DataContext);

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

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleUpdatePackageName = () => {
    console.log("handleUpdatePackageName ");
    // let nameString = `${selectPlain} (${selectPlainDuration.capitalizeFirstLetter()})`;
    let nameString = `${dataContext.selectPlain} (${capitalizeFirstLetter(
      dataContext.selectPlainDuration
    )})`;
    return nameString;
  };
  const handlePriceDisplay = () => {
    console.log("handlePriceDisplay");
    let price = dataContext.selectedPlainPrice;
    let period = dataContext.selectPlainDuration;
    let formatPeriod;
    if (period === "monthly") {
      formatPeriod = "month";
    } else if (period === "yearly") {
      formatPeriod = "year";
    }

    return formatString(formatPeriod, price);
  };

  const handleTotalCalculation = () => {
    console.log("hey");
    let addOnSum = Object.keys(services.addons).reduce(
      (accumulator, currentValue) => {
        if (dataContext.formData[currentValue] === true) {
          return accumulator + services.addons[currentValue].money;
        }
        return accumulator;
      },
      0
    );

    let totalSum = addOnSum + dataContext.selectedPlainPrice;

    let returnSum =
      dataContext.selectPlainDuration === "monthly"
        ? formatString("month", totalSum)
        : formatString("year", totalSum);

    return returnSum;
  };

  const services = {
    addons: {
      onlineServices: {
        title: "Online Service",
        subtitle: "Access to multiplayer games",
        mo: 1,
        yr: 10,
        plainDuration:
          dataContext.selectPlainDuration === "monthly"
            ? formatString("month", MONTHLY_PRICE.online_service)
            : formatString("year", YEARLY_PRICE.online_service),
        key: "Online Service",
        money:
          dataContext.selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.online_service
            : YEARLY_PRICE.online_service,
      },
      largerStorage: {
        title: "Larger storage",
        subtitle: "Extra 1TB of cloud save",
        mo: 2,
        yr: 20,
        plainDuration:
          dataContext.selectPlainDuration === "monthly"
            ? formatString("month", MONTHLY_PRICE.large_service)
            : formatString("year", YEARLY_PRICE.large_service),
        key: "Large Service",
        money:
          dataContext.selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.large_service
            : YEARLY_PRICE.large_service,
      },
      customizableProfile: {
        title: "Customizable Profile",
        subtitle: "Custom theme on your profile",
        mo: 2,
        yr: 20,
        plainDuration:
          dataContext.selectPlainDuration === "monthly"
            ? formatString("month", MONTHLY_PRICE.custom_service)
            : formatString("year", YEARLY_PRICE.custom_service),
        key: "Custom Service",
        money:
          dataContext.selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.custom_service
            : YEARLY_PRICE.custom_service,
      },
    },
  };

  return (
    <>
      <div className="finish-up-block" id="finish-up-id">
        <div className="form-content-block">
          <div className="head-and-info-wrapper">
            <div className="form-header">
              <h2>Finishing up</h2>
              <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className="form-block-container">
              <div className="finish-up-container">
                <div className="finish-info-block">
                  <div className="finish-package-block">
                    <h5 id="finish-package-name-id">
                      {handleUpdatePackageName()}
                    </h5>
                    <span
                      className="change-text-click"
                      onClick={() => dataContext.handleStepChange(2)}
                    >
                      Change
                    </span>
                  </div>
                  <div className="finish-package-price-block">
                    <h5 id="finish-package-price-id">{handlePriceDisplay()}</h5>
                  </div>
                </div>
                <div className="divider-line">
                  <hr />
                </div>
                <div className="finish-add-on-wrapper" id="add-on-wrapper-id">
                  {/* {addOnSelectedItem.map((data, index) => { */}
                  {Object.keys(services.addons).map((addon, idx) => {
                    // if (dataContext.formData[addon] === true) {
                    //   return (
                    //     <DisplaySummary
                    //       key={idx}
                    //       obj={{
                    //         title: services.addons[addon].title,
                    //         price:
                    //           dataContext.selectPlainDuration === "monthly"
                    //             ? formatString(
                    //                 "month",
                    //                 services.addons[addon].money
                    //               )
                    //             : formatString(
                    //                 "year",
                    //                 services.addons[addon].money
                    //               ),
                    //       }}
                    //     />
                    //   );
                    // }
                    return (
                    dataContext.formData[addon] === true && (
                      <DisplaySummary
                        key={idx}
                        obj={{
                          title: services.addons[addon].title,
                          price:
                            dataContext.selectPlainDuration === "monthly"
                              ? formatString(
                                  "month",
                                  services.addons[addon].money
                                )
                              : formatString(
                                  "year",
                                  services.addons[addon].money
                                ),
                        }}
                      />
                    ));
                  })}
                </div>
              </div>
              <div className="total-container">
                <div className="total-text">
                  <span className="finish-text-span" id="finist-total-text-id">
                    Total
                  </span>
                </div>
                <div className="total-value">
                  <span
                    className="finish-value-span"
                    id="finist-total-total-id"
                  >
                    {handleTotalCalculation()}
                  </span>
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
            <button
              className="next-button"
              onClick={dataContext.handleIncrementStepChange}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
