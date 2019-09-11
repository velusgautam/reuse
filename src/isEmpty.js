import isLength from "./.internals/isLength";

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/** Used for built-in method references. */
const objectProto = Object.prototype;

function isArrayLike(value) {
  return value != null && typeof value != "function" && isLength(value.length);
}

function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

function isArguments(value) {
  return isObjectLike(value) && getTag(value) == "[object Arguments]";
}

function isPrototype(value) {
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value == "string" ||
      typeof value.splice == "function" ||
      isArguments(value))
  ) {
    return !value.length;
  }
  const tag = getTag(value);
  if (tag == "[object Map]" || tag == "[object Set]") {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

export default isEmpty;
