import React from "react";

const DisplaySummary = (props) => {
  let { title, price } = props.obj;
  return (
    <>
      <div className="finish-add-on-block">
        <div className="finish-add-detail-block">
          <p>{title}</p>
        </div>
        <div className="finish-add-on-price-block">
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default DisplaySummary;
