/** @module utils */
import { clean, isArray } from './array';
import { isObject } from './object';

/**
 * Takes any number of args and normalizes
 * them into a single valid className string
 *
 * null, undefined or empty string will be filtered out of the className string
 *
 * @name classNames
 * @param {mixed} [...args] - The values to add to className
 * @return {string}
 * @example
 *  const cls = classNames('name', test != null ? 'class' : null, ['more', 'classes'], test2 ? 'test' : '');
 *  return (<div className={cls} />);
 */
export default function classNames(...args: any[]): string {
  const cls = args.map(v => _clsmod(v));
  const clsNorm = cls.map(a => convertArray(clean(a)));
  return convertArray(clean(clsNorm));
}

const _clsmod = (cls: any): any[] => {
  if (typeof cls === 'string') {
    return clean(convertString(cls));
  } else if (isArray(cls)) {
    return clean(cls);
  } else if (isObject(cls)) {
    return clean(
      Object.keys(cls).map(key =>
        !!cls[key] ? key : null
      )
    );
  } else if (typeof cls === 'number' && !isNaN(cls)) {
    return [ `${cls}` ];
  } else {
    return [];
  }
};

const convertString = (cls: string): string[] => {
  return cls.trim().split(' ');
};

const convertArray = (clsArray: string[]): string => {
  return clsArray.join(' ');
};
