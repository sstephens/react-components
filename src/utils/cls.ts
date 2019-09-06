/** @module utils */
import { clean } from '@bit/sstephens.components.clean';
import { isArray } from '@bit/sstephens.components.is-array';
import { isObject } from '@bit/sstephens.components.is-object';

/**
 * Takes any number of args and normalizes
 * them into a single valid className string
 *
 * null, undefined or empty string will be filtered out of the className string
 *
 * @name cls
 * @param {mixed} args [args] - The values to add to className
 * @return {string}
 * @example
 *  const cls = classNames('name', test != null ? 'class' : null, ['more', 'classes'], test2 ? 'test' : '');
 *  return (<div className={cls} />);
 */
export function cls(...args: any[]): string {
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

