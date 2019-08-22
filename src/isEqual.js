  /** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
const argsTag = "[object Arguments]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/** Built-in value references. */
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeGetSymbols = Object.getOwnPropertySymbols;

const toString = Object.prototype.toString;

const isBuffer = () => false;

/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
const reIsUint = /^(?:0|[1-9]\d*)$/;

function isArguments(value) {
  return isObjectLike(value) && getTag(value) == "[object Arguments]";
}

function isIndex(value, length) {
  const type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return (
    !!length &&
    (type == "number" || (type != "symbol" && reIsUint.test(value))) &&
    (value > -1 && value % 1 == 0 && value < length)
  );
}

function arrayLikeKeys(value, inherited) {
  const isArr = Array.isArray(value);
  const isArg = !isArr && isArguments(value);
  const isBuff = !isArr && !isArg && isBuffer(value);
  const skipIndexes = isArr || isArg || isBuff;
  const length = value.length;
  const result = new Array(skipIndexes ? length : 0);
  let index = skipIndexes ? -1 : length;
  while (++index < length) {
    result[index] = `${index}`;
  }
  for (const key in value) {
    if (
      (inherited || hasOwnProperty.call(value, key)) &&
      !(
        skipIndexes &&
        // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" ||
          // Skip index properties.
          isIndex(key, length))
      )
    ) {
      result.push(key);
    }
  }
  return result;
}

function getSymbols(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return nativeGetSymbols(object).filter(symbol =>
    propertyIsEnumerable.call(object, symbol)
  );
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

function some(array, predicate) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

function cacheHas(cache, key) {
  return cache.has(key);
}

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
  const arrLength = array.length;
  const othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  const stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  let index = -1;
  let result = true;
  const seen = undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    let compared;
    const arrValue = array[index];
    const othValue = other[index];

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (
        !some(other, (othValue, othIndex) => {
          if (
            !cacheHas(seen, othIndex) &&
            (arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack))
          ) {
            return seen.push(othIndex);
          }
        })
      ) {
        result = false;
        break;
      }
    } else if (
      !(
        arrValue === othValue ||
        equalFunc(arrValue, othValue, bitmask, customizer, stack)
      )
    ) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}

function isLength(value) {
  return (
    typeof value == "number" &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER
  );
}

function isArrayLike(value) {
  return value != null && typeof value != "function" && isLength(value.length);
}

function keys(object) {
  return isArrayLike(object)
    ? arrayLikeKeys(object)
    : Object.keys(Object(object));
}

function getAllKeys(object) {
  const result = keys(object);
  if (!Array.isArray(object)) {
    result.push(...getSymbols(object));
  }
  return result;
}

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
  const objProps = getAllKeys(object);
  const objLength = objProps.length;
  const othProps = getAllKeys(other);
  const othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  let key;
  let index = objLength;
  while (index--) {
    key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  const stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  let result = true;
  stack.set(object, other);
  stack.set(other, object);

  let compared;
  let skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    const objValue = object[key];
    const othValue = other[key];

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (
      !(compared === undefined
        ? objValue === othValue ||
          equalFunc(objValue, othValue, bitmask, customizer, stack)
        : compared)
    ) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    const objCtor = object.constructor;
    const othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (
      objCtor != othCtor &&
      ("constructor" in object && "constructor" in other) &&
      !(
        typeof objCtor == "function" &&
        objCtor instanceof objCtor &&
        typeof othCtor == "function" &&
        othCtor instanceof othCtor
      )
    ) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

function assocIndexOf(array, key) {
  let { length } = array;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

class ListCache {
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @memberOf ListCache
   */
  clear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    const lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      data.splice(index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  set(key, value) {
    const data = this.__data__;
    const index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
}

class Stack {
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  constructor(entries) {
    const data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @memberOf Stack
   */
  clear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  delete(key) {
    const data = this.__data__;
    const result = data["delete"](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  get(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  set(key, value) {
    let data = this.__data__;

    data.set(key, value);
    this.size = data.size;
    return this;
  }
}

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  let objIsArr = Array.isArray(object);
  const othIsArr = Array.isArray(other);
  let objTag = objIsArr ? arrayTag : getTag(object);
  let othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  let objIsObj = objTag == objectTag;
  const othIsObj = othTag == objectTag;
  const isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return equalArrays(object, other, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    const objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__");
    const othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");

    if (objIsWrapped || othIsWrapped) {
      const objUnwrapped = objIsWrapped ? object.value() : object;
      const othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

function isEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (
    value == null ||
    other == null ||
    (!isObjectLike(value) && !isObjectLike(other))
  ) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, isEqual, stack);
}

export default isEqual;
