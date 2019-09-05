/**
 * @module Source
 *
 */
import * as React from 'react';
import Container from './components/Container';
import Button from './components/Button';


/**
 * @class Showcase
 *
 */
export default function Showcase() {
	return (
		<div>
			<Container>
				<Button
					onClick={() => alert("You can click a button!")}
					color="blue"
				>Click Me</Button>
			</Container>
		</div>
	);
}
