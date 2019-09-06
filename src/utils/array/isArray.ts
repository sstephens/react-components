/** @module utils */

/**
 * Checks is a non null/undefined object is an array
 *
 * @name isArray
 * @param {mixed} value - The value to test
 * @return {boolean}
 */
export function isArray(value: any): boolean {
  if (value != null && typeof value === 'object' && Array.isArray(value)) {
    return true;
  }
  return false;
}
