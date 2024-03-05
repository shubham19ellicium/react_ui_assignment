import React, { useContext, useEffect } from "react";
import doneImage from "../../assets/images/checked.jfif";
import { DataContext } from "../../context/stateData";

const StepFIve = () => {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    if (dataContext.stepNumber === 5) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      dataContext.setNonFlag(true);
      console.log("I AM PRINTING");
    }
  }, []);

  return (
    <>
      <div className="thank-you-block" id="thank-you-id">
        <div className="thank-you-card">
          <img src={doneImage} className="checked-image" alt="" />
          <h2>Thank you!</h2>
          <div className="thank-you-text-block">
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFIve;
