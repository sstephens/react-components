/** @module utils/array */
import { isEmpty } from '@bit/sstephens.components.is-empty';

/**
 * Removes null, undefined, empty strings from an array
 *
 * @name clean
 * @param {[]} list - The array to clean up
 * @return {[]}
 */
export function clean<T>(list: T[]): T[] {
  return Array.prototype.filter.call(list, (value: T) => !isEmpty(value));
}
