export const validateEmailExtension = (string) => {
  let wordCheckReg = /^[a-zA-Z]+$/;
  var arr = string.split("@");
  if (arr.length > 1) {
    var min = arr[1].split(".");
    const hasDuplicates = (arr) => arr.length !== new Set(arr).size;
    if (min.length > 2) {
      return false;
    } else if (hasDuplicates(min)) {
      return false;
    } else if (min.length > 0) {
      if (
        wordCheckReg.test(min[0]) === false ||
        wordCheckReg.test(min[1]) === false
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }

    // else if (min.length>0) {
    //   if (wordCheckReg.test(min[0]) === false || wordCheckReg.test(min[1]) === false) {
    //     return false;
    //   }
    // }
  }
};

export const emailValidation = (params) => {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(params) &&
    validateEmailExtension(params)
  ) {
    return true;
  }
  return false;
};

export function numberValidation(params) {
  let phoneNumber = params;
  var regex = /\D/g;

  if (phoneNumber.length === 0) {
    return false;
  } else if (regex.test(phoneNumber)) {
    return false;
  } else if (phoneNumber.length < 10) {
    return false;
  } else {
    return true;
  }
}

/**
 * Function to format according to required string
 *
 * @param {String} period
 * @param {String} price
 * @returns {String}
 */
export const formatString = (period, price) => {
  // debugger
  if (period === "year") {
    return `$${price}/yr`;
  } else if (period === "month") {
    return `$${price}/mo`;
  }
};
