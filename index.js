/**
 * Module Dependencies
 */

var symbols = /([\0-\u02FF\u0370-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uDC00-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF])([\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
var surrogates = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

/**
 * Expose `reverse`
 */

module.exports = reverse;

/**
 * Reverse a string
 *
 * @param {String} str
 * @return {String}
 */

function reverse(str) {
  // Step 1: deal with combining marks and astral symbols (surrogate pairs)
  str = str
    .replace(symbols, function($0, $1, $2) { return reverse($2) + $1; })
    .replace(surrogates, '$2$1');

  // Step 2: reverse the code units in the string
  var out = '';
  var i = str.length;
  while (i--) {
    out += str.charAt(i);
  }

  return out;
}
