import React, { useEffect, useState } from "react";

const AddOn = ({
  title,
  subtitle,
  rate,
  active,
  type,
  handlePlanClick,
  money,
  plainDuration,
  formData,
}) => {
  let [toggle, setToggle] = useState(false);
  let [check, setCheck] = useState(false);

  const handleClicked = (type) => {
    setToggle((current) => {
      return !current;
    });
    setCheck((prev) => !prev);
    handlePlanClick(type);
  };
  useEffect(() => {
    if (formData[type] === true) {
      setToggle((current) => {
        return true;
      });
      setCheck((prev) => true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        className={toggle === true ? "add-on-box box-active" : "add-on-box"}
        onClick={() => handleClicked(type)}
      >
        <div className="add-on-check-info">
          <div className="add-on-check-block">
            <input
              type="checkbox"
              name=""
              className="add-on-check"
              //   onChange={() => handleClicked(`add-on-box-${index}`)}
                checked={check}
              onChange={() => setCheck(!check)}
            />
          </div>
          <div className="add-on-check-info-block">
            <h5>{title}</h5>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="add-on-price-info">
          <div className="price">
            <p className="addon-price" id="online-price-id">
              {plainDuration}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOn;
