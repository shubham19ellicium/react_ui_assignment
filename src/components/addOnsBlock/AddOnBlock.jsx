import React, { useEffect, useState } from "react";

const AddOnBlock = (props) => {
  let {
    title,
    subTitle,
    plainDuration,
    index,
    key,
    func,
    money,
    addOnProp,
    selectObj,
  } = props.addons;
  let [toggle, setToggle] = useState(false);
  let [check, setCheck] = useState(false);

  const handleClicked = (e) => {
    let obj = {};

    selectObj((prev) => {
      return { ...prev, [e]: !prev[e] };
    });

    setToggle((current) => {
      //   obj[e.target.dataset.key] = money;
      obj["title"] = e.target.dataset.key;
      obj["price"] = money;
      if (current === false) {
        func((prev) => [...prev, obj]);
      } else {
        func((prev) => {
          return prev.filter((ele) => ele.title !== obj.title);
        });
      }
      return !current;
    });

    setCheck((prev) => !prev);
  };

  // const handleClicked = (id) => {
  //   let obj = {};
  //   let element = document.getElementById(id);

  //   setToggle((current) => {
  //     obj["title"] = element.dataset.key;
  //     obj["price"] = money;
  //     if (current === false) {
  //       func((prev) => {
  //         return [...prev, obj];
  //       });
  //     } else {
  //       func((prev) => {
  //         return prev.filter((ele) => ele.title !== obj.title);
  //       });
  //     }
  //     return !current;
  //   });

  //   setCheck((prev) => !prev);
  // };

  // useEffect(() => {
  //   console.log("LOGGING ARRAY :: --- > ", addOnProp);
  // }, []);

  return (
    <>
      <div
        className={toggle === true ? "add-on-box box-active" : "add-on-box"}
        id={`add-on-box-${index}`}
        // onClick={() => handleClicked(`add-on-box-${index}`)}
        onClick={handleClicked}
        data-key={key}
      >
        <div className="add-on-check-info">
          <div className="add-on-check-block">
            <input
              type="checkbox"
              name=""
              id={`add-on-id-${index}`}
              className="add-on-check"
              //   onChange={() => handleClicked(`add-on-box-${index}`)}
              checked={check}
            />
          </div>
          <div className="add-on-check-info-block">
            <h5>{title}</h5>
            <p>{subTitle}</p>
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

export default AddOnBlock;
