/**
 *
 * @param {function} fn function to call
 * @param {number} delay delay time
 * @param {boolean} at_start call at start
 * @param {boolean} guarantee call guaranteed
 */
function debounce(fn, delay, at_start, guarantee) {
  var timeout;
  var args;
  var self;

  return function debounced() {
    self = this;
    args = Array.prototype.slice.call(arguments);

    if (timeout && (at_start || guarantee)) {
      return;
    } else if (!at_start) {
      clear();

      timeout = setTimeout(run, delay);
      return timeout;
    }

    timeout = setTimeout(clear, delay);
    fn.apply(self, args);

    function run() {
      clear();
      fn.apply(self, args);
    }

    function clear() {
      clearTimeout(timeout);
      timeout = null;
    }
  };
}

export default debounce;
