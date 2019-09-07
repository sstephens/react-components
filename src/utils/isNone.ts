/** @module utils */

/**
 * Returns true if the passed value is null or undefined. This avoids errors
 * from JSLint complaining about use of ==, which can be technically
 * confusing.
 *
 * ```javascript
 *  isNone();              // true
 *  isNone(null);          // true
 *  isNone(undefined);     // true
 *  isNone('');            // false
 *  isNone([]);            // false
 *  isNone(function() {}); // false
 * ```
 *
 * @name isNone
 * @param {mixed} value - The value to test
 * @return {boolean}
 */
export default function isNone(value: any): boolean {
  return value === null || value === undefined;
}

