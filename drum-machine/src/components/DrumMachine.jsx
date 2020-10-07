import React from 'react';
import Buttons from './Buttons';
function DrumMachine() {
	return (
		<div id='drum-machine'>
			<div id='display'>
				<Buttons className='buttons' />
				<div className='others'> somehting</div>
			</div>
		</div>
	);
}

export default DrumMachine;
