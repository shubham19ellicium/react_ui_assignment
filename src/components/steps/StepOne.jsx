import React, { useContext, useState } from "react";
import { emailValidation, numberValidation } from "../../commonUtil/CommonUtil";
import { DataContext } from "../../context/stateData";

const StepOne = () => {
    
  const dataContext = useContext(DataContext);

  const [nameErrorFlag, setNameErrorFlag] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  const [emailErrorFlag, setEmailErrorFlag] = useState(false);
  const [emialErrorMessage, setEmailErrorMessage] = useState("");

  const [phoneErrorFlag, setPhoneErrorFlag] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  let checkName = (inputName) => {
    var regex = /^[A-Za-z\s]+$/;

    if (inputName.length === 0) {
      setNameErrorFlag(true);
      setNameErrorMessage("Field should not be empty");
    } else if (!regex.test(inputName)) {
      setNameErrorFlag(true);
      setNameErrorMessage("Only charecters allowed");
    } else if (inputName.length === 30) {
      setNameErrorFlag(true);
      setNameErrorMessage("Reached Max Limit");

      setTimeout(() => {
        setNameErrorFlag(false);
        setNameErrorMessage("");
      }, 1000);
    } else {
      setNameErrorFlag(false);
      setNameErrorMessage("");
    }
  };

  let checkEmail = (inputEmail) => {
    if (inputEmail.length === 0) {
      setEmailErrorFlag(true);
      setEmailErrorMessage("Field should not be empty");
    } else if (!emailValidation(inputEmail) === true) {
      setEmailErrorFlag(true);
      setEmailErrorMessage("Enter valid email id");
    } else {
      setEmailErrorFlag(false);
      setEmailErrorMessage("");
    }
  };

  let checkPhone = (phoneNumber) => {
    var regex = /\D/g;

    if (phoneNumber.length === 0) {
      setPhoneErrorFlag(true);
      setPhoneErrorMessage("Field should not be empty");
    } else if (regex.test(phoneNumber)) {
      setPhoneErrorFlag(true);
      setPhoneErrorMessage("Enter valid phone number");
    } else if (phoneNumber.length === 10) {
      setPhoneErrorFlag(true);
      setPhoneErrorMessage("Reached Max Limit");

      setTimeout(() => {
        setPhoneErrorFlag(false);
        setPhoneErrorMessage("");
      }, 1000);
    } else {
      setPhoneErrorFlag(false);
      setPhoneErrorMessage("");
    }
  };

  let checkNameError = (inputName) => {
    var regex = /^[A-Za-z\s]+$/;

    if (inputName.length === 0) {
      setNameErrorFlag(true);
      setNameErrorMessage("Field should not be empty");
    } else if (!regex.test(inputName)) {
      setNameErrorFlag(true);
      setNameErrorMessage("Only charecters allowed");
    } else {
      setNameErrorFlag(false);
      setNameErrorMessage("");
    }
  };

  let checkPhoneError = (phoneNumber) => {
    var regex = /\D/g;

    if (phoneNumber.length === 0) {
      setPhoneErrorFlag(true);
      setPhoneErrorMessage("Field should not be empty");
    } else if (regex.test(phoneNumber)) {
      setPhoneErrorFlag(true);
      setPhoneErrorMessage("Enter valid phone number");
    } else {
      setPhoneErrorFlag(false);
      setPhoneErrorMessage("");
    }
  };

  const handleNameChange = (e) => {
    let inputName = e.target.value;
    dataContext.setName(inputName);
    checkName(inputName);
  };

  const handleEmailChange = (e) => {
    let inputEmail = e.target.value;
    dataContext.setEmail(inputEmail);
    checkEmail(inputEmail);
  };

  const handlePhoneChange = (e) => {
    let phoneNumber = e.target.value;
    dataContext.setPhone(phoneNumber);
    checkPhone(phoneNumber);
  };

  const increment = () => {
    dataContext.handleIncrementStepChange()
    console.log("HANDLE INCREMENT :: ",dataContext.handleIncrementStepChange);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputName = dataContext.name;
    let inputEmail = dataContext.email;
    let inputPhone = dataContext.phone;
    var regex = /^[A-Za-z\s]+$/;

    if (inputPhone.length < 10) {
      setPhoneErrorFlag(true);
      setPhoneErrorMessage("Enter valid number");
      return
    }

    if (
      inputName.length > 0 &&
      regex.test(inputName) &&
      inputEmail.length > 0 &&
      emailValidation(inputEmail) &&
      inputPhone.length > 0 &&
      numberValidation(inputPhone)
    ) {
      sessionStorage.setItem("username", inputName.replace(/\s+/g, " "));
      console.log("DATACONTEXT name:: ", dataContext.name);
      console.log("DATACONTEXT email:: ", dataContext.email);
      console.log("DATACONTEXT phone:: ", dataContext.phone);
      // sessionStorage.setItem("username", inputName);
      increment();
    } else {
      console.log("*********  ***********");

      checkPhoneError(inputPhone);
      checkNameError(inputName);
    }
  };

  

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="personal-info-block"
        id="personal-info-id"
      >
        <div className="form-content-block">
          <div className="head-and-info-wrapper">
            <div className="form-header">
              <h2>Personal info</h2>
              <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="form-block-container">
              <div className="form-info-block">
                <div className="form-info-label">
                  <div className="info-label">
                    <span>Name</span>
                  </div>
                  <div className="info-label-error">
                    <span id="error-name" className="name-error-message">
                      {nameErrorFlag && nameErrorMessage}
                    </span>
                    {/* <span
                      id="error-name-1"
                      className="name-error-message"
                    ></span> */}
                  </div>
                </div>
                <div className="form-info-input-block">
                  <input
                    type="text"
                    // className= "info-input-box"
                    className= {nameErrorFlag === true ? "info-input-box info-input-error-outline" : "info-input-box"}
                    placeholder="e.g. Stephen King"
                    onChange={handleNameChange}
                    value={dataContext.name}
                    maxLength={30}
                    required
                  />
                </div>
              </div>
              <div className="form-info-block">
                <div className="form-info-label">
                  <div className="info-label">
                    <span>Email Address</span>
                  </div>
                  <div className="info-label-error">
                    <span id="error-email" className="name-error-message">
                      {emailErrorFlag && emialErrorMessage}
                    </span>
                  </div>
                </div>
                <div className="form-info-input-block">
                  <input
                    type="email"
                    // className="info-input-box"
                    className= {emailErrorFlag === true ? "info-input-box info-input-error-outline" : "info-input-box"}
                    placeholder="e.g. Stephen@gmail.com"
                    onChange={handleEmailChange}
                    value={dataContext.email}
                    required
                  />
                </div>
              </div>
              <div className="form-info-block">
                <div className="form-info-label">
                  <div className="info-label">
                    <span>Phone number</span>
                  </div>
                  <div className="info-label-error">
                    <span
                      id="error-number"
                      className="name-error-message"
                    ></span>
                    <span id="error-number-1" className="name-error-message">
                      {phoneErrorFlag && phoneErrorMessage}
                    </span>
                  </div>
                </div>
                <div className="form-info-input-block">
                  <input
                    type="tel"
                    // className="info-input-box"
                    className= {phoneErrorFlag === true ? "info-input-box info-input-error-outline" : "info-input-box"}
                    placeholder="e.g. 9090909090"
                    onChange={handlePhoneChange}
                    value={dataContext.phone}
                    maxLength={10}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-block">
          <div className="next-button-block">
            <div className="go-back-block"></div>
            <button className="next-button" type="submit">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default StepOne;
