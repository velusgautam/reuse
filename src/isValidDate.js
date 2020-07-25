/**
 * To check if the date string is a valid date. It will check for leap year dates as well
 * eg: 29-02-1997 is invalid but 29-02-1996 is valid.
 * @param {string} date ["2020-01-01"|"20-02-2020"] Length of 10 characters.
 */
const isValidDate = (date) => {
  if (date && String(date).length < 10) {
    return false;
  }
  try {
    const splitter = date.replace(/[0-9]/g, '')[0];

    const parts = date.split(splitter);

    // since year can be in front for yyyy-mm-dd and in last for dd-mm-yyyy taking care of that logic
    const year = parts[0].length === 4 ? parts[0] : parts[2];

    // month will be always in center
    const month = parts[1];
    // taking care of day for the different formats like yyyy-mm-dd or dd-mm-yyyy
    const day = parts[0].length === 4 ? parts[2] : parts[0];

    // creating date our of the year, month day
    const dateCheck = new Date(year, +month - 1, day);

    //validates leapyear and dates exceeding month limit
    const dateCheckStatus = Boolean(+dateCheck) && dateCheck.getDate() == day;

    // isValid date is true if the date is valid else false
    return dateCheckStatus;
  } catch (err) {
    return false;
  }
};

export default isValidDate;
