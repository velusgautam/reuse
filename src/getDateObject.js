/**
 * Get Year, Month, Day from string date
 * @param {string} date ["2020-01-01"|"20-02-2020"] Length of 10 characters.
 */
const getDateObject = (value) => {
  if (value && String(value).length < 10) {
    return null;
  }
  const splitter = value.replace(/[0-9]/g, '')[0];
  var parts = value.split(splitter);
  // initializing string dates
  let year = '0000',
    month = '00',
    day = '00';

  // As per format YYYY-MM-DD *year* will be first else DD.MM.YYYY *year* will be last
  if (parts[0].length === 4) {
    year = String(parseInt(parts[0]));
    month = String(parseInt(parts[1]));
    day = String(parseInt(parts[2]));
  } else {
    year = String(parseInt(parts[2]));
    month = String(parseInt(parts[1]));
    day = String(parseInt(parts[0]));
  }
  // expect string year: "1999", month: "8" 0r "12", day: "2" or "10"
  return {
    year,
    month,
    day,
  };
};

export default getDateObject;
