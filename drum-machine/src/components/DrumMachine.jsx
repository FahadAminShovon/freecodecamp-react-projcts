import React, { useState } from 'react';
import Buttons from './Buttons';


function DrumMachine() {
	const [describe, setDescribe] = useState('');
	const [power, setPower] = useState(true);
	const [volume, setVolume] = useState(50);
	const [piano, setPiano] = useState(false);

	const handlePianoChange = async() => {
		if(power){
		await setPiano(!piano);
		if(piano){
			setDescribe('Heater Kit');
		}
		else {
			setDescribe('SmoothPiano Kit')
		}
		}

	}

	const handleVolumeChange = (e) => {
		const vol = parseInt(e.target.value, 10);
		setVolume(vol);
		setDescribe(`Volume: ${vol}`);
	}

	return (
		<div id='drum-machine'>
			<div id='display'>
				<Buttons
					className='buttons'
					setDescribe={setDescribe}
					power={power}
					volume={volume}
					piano={piano}
				/>
				<div className='others'>
					<div className='switch'>
						<label className='switch' value="Power">
							<input
								type='checkbox'
								checked={power}
								onChange={() =>
									setPower((prevState) => !prevState)
								}
							/>
							<span className='slider'></span>
							<div className="label-text">Power</div>
						</label>
					</div>
					<div className='descirbe'>{describe}</div>
					<div className="slider-range">
						<input type="range" className="range" step="1" max="100" min="0" defaultValue={volume}
						onChange={handleVolumeChange}
						/>
					</div>

					<div className='switch'>
						<label className='switch'>
							<input
								type='checkbox'
								checked={piano}
								onChange={handlePianoChange}
							/>
							<span className='slider'></span>
							<div className="label-text">Bank</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DrumMachine;
