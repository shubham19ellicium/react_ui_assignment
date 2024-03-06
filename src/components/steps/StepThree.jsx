import React, { useContext, useState } from "react";
import { DataContext } from "../../context/stateData";
import { formatString } from "../../commonUtil/CommonUtil";
import AddOn from "../addOnsBlock/AddOn";
import { SelectPlainContext } from "../../context/selectPlainContext";

const StepThree = () => {
  //   const [formData, setFormData] = useState({
  //     onlineServices: false,
  //     largerStorage: false,
  //     customizableProfile: false,
  //   });

  const selectPlanContext = useContext(SelectPlainContext);
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

  const services = {
    addons: {
      onlineServices: {
        title: "Online Service",
        subtitle: "Access to multiplayer games",
        mo: 1,
        yr: 10,
        plainDuration:
          selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
            ? formatString("month", MONTHLY_PRICE.online_service)
            : formatString("year", YEARLY_PRICE.online_service),
        key: "Online Service",
        money:
          selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.online_service
            : YEARLY_PRICE.online_service,
      },
      largerStorage: {
        title: "Larger storage",
        subtitle: "Extra 1TB of cloud save",
        mo: 2,
        yr: 20,
        plainDuration:
          selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
            ? formatString("month", MONTHLY_PRICE.large_service)
            : formatString("year", YEARLY_PRICE.large_service),
        key: "Large Service",
        money:
          selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.large_service
            : YEARLY_PRICE.large_service,
      },
      customizableProfile: {
        title: "Customizable Profile",
        subtitle: "Custom theme on your profile",
        mo: 2,
        yr: 20,
        plainDuration:
          selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
            ? formatString("month", MONTHLY_PRICE.custom_service)
            : formatString("year", YEARLY_PRICE.custom_service),
        key: "Custom Service",
        money:
          selectPlanContext.selectPlanObject.selectPlainDuration === "monthly"
            ? MONTHLY_PRICE.custom_service
            : YEARLY_PRICE.custom_service,
      },
    },
  };

  const handlePlanClick = (addon) => {
    dataContext.setFormData((prev) => {
      return { ...prev, [addon]: !prev[addon] };
    });
  };

  return (
    <>
      <div className="add-on-block" id="add-on-id">
        <div className="form-content-block">
          <div className="head-and-info-wrapper">
            <div className="form-header">
              <h2>Pick add-ons</h2>
              <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="form-block-container">
              <div className="add-on-container">
                {/* {addOnObject.map((obj, index) => { */}
                {Object.keys(services.addons).map((addon, idx) => {
                  return (
                    <AddOn
                      key={addon + idx}
                      title={services.addons[addon].title}
                      subtitle={services.addons[addon].subtitle}
                      rate={
                        services.addons[addon][dataContext.formData.billing]
                      }
                      active={dataContext.formData[addon]}
                      type={addon}
                      handlePlanClick={handlePlanClick}
                      plainDuration={services.addons[addon].plainDuration}
                      formData={dataContext.formData}
                    />
                    // <AddOnBlock
                    //   key={index}
                    //   addons={{
                    //     title: obj.title,
                    //     subTitle: obj.subTitle,
                    //     plainDuration: obj.plainDuration,
                    //     index: index,
                    //     key: obj.key,
                    //     func: setAddOnSelectedItem,
                    //     money: obj.money,
                    //     addOnProp:addOnSelectedItem,
                    //     selectObj:setAddOnSelectedItemObj,
                    //   }}
                    // />
                  );
                })}
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
              // onClick={props.handleIncrementStepChange}
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

export default StepThree;
