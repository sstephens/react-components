/** @module utils */
import { isNone } from '@bit/sstephens.components.is-none';

/**
 * Verifies that a value is `null` or `undefined`, an empty string, or an empty
 * array.
 * Constrains the rules on `isNone` by returning true for empty strings and
 * empty arrays.
 *
 * If the value is an object with a `size` property of type number, it is used
 * to check emptiness.
 * ```javascript
 * isEmpty();                 // true
 * isEmpty(null);             // true
 * isEmpty(undefined);        // true
 * isEmpty('');               // true
 * isEmpty([]);               // true
 * isEmpty({ size: 0});       // true
 * isEmpty({});               // false
 * isEmpty('Adam Hawkins');   // false
 * isEmpty([0,1,2]);          // false
 * isEmpty('\n\t');           // false
 * isEmpty('  ');             // false
 * isEmpty({ size: 1 })       // false
 * isEmpty({ size: () => 0 }) // false
 * ```
 * @name isEmpty
 * @param {mixed} value - The value to test
 * @return {boolean}
 */
export function isEmpty(value: any): boolean {
  if (isNone(value)) {
    return true;
  }

  if (typeof value.size === 'number') {
    return !value.size;
  }

  const valueType = typeof value;
  if (valueType === 'object') {
    const size = value.size;
    if (typeof size === 'number') {
      return !size;
    }
  }

  if (typeof value.length === 'number' && valueType !== 'function') {
    return !value.length;
  }

  if (valueType === 'object') {
    const length = value.length;
    if (typeof length === 'number') {
      return !length;
    }
  }
  return false;
}

