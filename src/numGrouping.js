/**
 * Group numbers eg 10000 => 10 000
 * @param {Number} num | Number to format
 * @param {Boolean} decimals | Should show decimals or not
 */
function numGrouping(num, decimals = true) {
  const formattedNum = typeof num === "string" ? num.replace(",", ".") : num;

  return (decimals
    ? Number(`${formattedNum}`)
    : Number.parseInt(`${formattedNum}`, 10)
  )
    .toLocaleString()
    .split(",")
    .join(" ");
}

export default numGrouping;
