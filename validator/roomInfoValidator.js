const roomInfoValidate = (info) => {
  let error = {};
  if (!info.name) {
    error.name = "Please provide a Name";
  }
  if (!info.information) {
    error.information = "Please provide Information";
  }
  if (!info.pets) {
    error.pets = "Please provide Pet allowance";
  }
  if (!info.breakfast) {
    error.breakfast = "Please provide Breakfast availability";
  }
  if (!info.availability) {
    error.availability = "Please provide Availability Status";
  }
  if (!info.capacity) {
    error.capacity = "Please provide Total Capacity";
  }
  if (!info.price) {
    error.price = "Please provide Price";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};
module.exports = roomInfoValidate;
