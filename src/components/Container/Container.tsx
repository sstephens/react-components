/**
 * @module Components
 *
 */
import React from 'react';
import './styles.css';

type Props = React.PropsWithChildren<{}>;

/**
 * @class Container
 *
 */
export default function Container(props: Props) {
	return (
		<div className="Container">
			{props.children}
		</div>
	);
}
