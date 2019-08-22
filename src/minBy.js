/**
 *
 * @param {Array} array Array to find
 * @param {Function} iteratee Custom function
 */
function minBy(array, iteratee) {
  let result;

  if (array == null) {
    return result;
  }
  let computed;
  for (const value of array) {
    const current = iteratee(value);

    if (
      current != null &&
      (computed === undefined ? current === current : current < computed)
    ) {
      computed = current;
      result = value;
    }
  }
  return result;
}

export default minBy;
