/** @module Components */
import React from 'react';
import cls from './../../utils/classNames';
import './styles.css';

/**
 * @typedef {Object} Properties
 * @property {string} children - Inner html elements
 */
type Props = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
}>;

/**
 * Basic wrapper element that takes up as much space as is allowed
 *
 * @name Container
 * @param {Properties} props
 * @return {Element}
 */
export default function Container(props: Props) {
	return (
		<div className={cls("Container", props.className)} style={Object.assign({}, props.style)}>
			{props.children}
		</div>
	);
}
