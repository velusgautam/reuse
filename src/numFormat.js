/**
 * Number Format numbers
 * 0.123123 => 0.12
 * 10000 => 10K
 *
 * @param {Number} num | main number to format
 * @param {Number} decimals  | number of decimal places to show
 */
const numberFormat = (num, decimals) => {
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  for (let i = 0; i < si.length; i += 1) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value).toFixed(decimals).replace(rx, "$1") + si[i].symbol
      );
    }
  }
  return num.toFixed(decimals).replace(rx, "$1");
};

export default numberFormat;
