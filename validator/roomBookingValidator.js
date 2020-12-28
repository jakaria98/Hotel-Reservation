//                          THIS PAGE IS NOT USED

const validator = require("validator");

const validate = (user) => {
  let error = {};

  if (!user.name) {
    error.name = "Please Provide Your Name";
  }

  if (!user.email) {
    error.email = "Please Provide Your Email";
  } else if (!validator.isEmail(user.email)) {
    error.email = "Please Provide a Valid Email";
  }
  if (!user.nid) {
    error.nid = "Please Provide Your NID";
  }
  if (!user.checkingDate) {
    error.name = "Please Provide a Check-in Date";
  }
  if (!user.checkoutDate) {
    error.checkoutDate = "Please Provide a Check-out Date";
  }
  if (!user.roomName) {
    error.roomName = "Please Provide Room Name";
  }
  if (!user.transactionNumber) {
    error.transactionNumber = "Please Provide your Payment Transaction Number";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

module.exports = validate;
