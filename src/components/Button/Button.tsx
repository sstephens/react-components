/**
 * @module Components
 *
 */
import React from 'react';
import './index.css';

type Props = React.PropsWithChildren<{
	onClick?: () => void;
	color?: string;
}>;

export default function Button(props: Props) {
	const handleClick = () => {
		if (typeof props.onClick === 'function') {
			props.onClick();
		}
	};

	const clsName = ['button-main'];
	if (props.color) {
		clsName.push(props.color);
	}

	return (
		<button className={clsName.join(' ')} onClick={handleClick}>
			{props.children}
		</button>
	);
}
