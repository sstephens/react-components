/** @module utils/object */

/**
 * Test if a value is non null/undefined
 * and has typeof object and is not an array
 *
 * @name isObject
 * @param {mixed} value - The value to test
 * @return {boolean}
 */
export function isObject(value: any) {
  if (value != null && typeof value === 'object' && !Array.isArray(value)) {
    return true;
  }
  return false;
}
