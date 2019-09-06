/** @module components */
import React from 'react';
import { cls } from '@bit/sstephens.components.cls';
import './styles.css';

/**
 * @typedef {Object} Properties
 * @property {string} className - Custom class name
 * @property {string} color - Background color (options: [ blue, green, red, grey, gray, black, text ])
 * @property {style} object - CSS custom styles
 * @property {boolean} disabled - prevent click event callback
 * @property {string} children - Inner text
 * @property {function} onClick - Click handler
 */
type Props = React.PropsWithChildren<{
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'grey' | 'gray' | 'black' | 'text';
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;

/**
 * Renders a clickable ui button
 *
 * @name Button
 * @param {Properties} props
 */
export default function Button(props: Props) {
  // add custom class names
  const clsName = cls('button-main', props.className, props.color, props.disabled === true ? 'disabled' : '');

  // handle onClick event
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (typeof props.onClick === 'function' && !props.disabled) {
			props.onClick(event);
		}
	};

	return (
    <button
      className={clsName}
      onClick={handleClick}
      style={Object.assign({}, props.style)}
    >
			{props.children}
		</button>
	);
}
