import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useKeyPress from '../hooks/useKeyPress';

function AudioDiv({ button, audioSrc, buttonId, power, setDescribe, volume }) {
	const keyPressUpper = useKeyPress(button.toUpperCase());
	const keyPressLower = useKeyPress(button.toLowerCase());

	const playAudio = (node) => {
		setDescribe(node.id);
		node.children[0].volume = volume * 0.01;
		node.children[0].play();
	};

	const blink = (node) => {
		node.classList.toggle('drum-pad-active');
		// play audio here
		playAudio(node);
		setTimeout(() => {
			node.classList.toggle('drum-pad-active');
		}, 100);
	};

	const blinkWithoutPower = (node) => {
		node.classList.toggle('drum-pad-pressed');
		// play audio here
		setTimeout(() => {
			node.classList.toggle('drum-pad-pressed');
		}, 100);
	};

	const handleEvent = () => {
		const node = document.getElementById(buttonId);
		if (power) blink(node);
		else blinkWithoutPower(node);
	};

	const handleClick = () => {
		handleEvent();
	};

	useEffect(handleEvent, [keyPressUpper, keyPressLower]);

	// if( keyPressLower || keyPressUpper){
	// 	handleEvent()
	// }

	return (
		<div className='drum-pad' id={buttonId} onClick={handleClick}>
			<audio className='clip' id={button} src={audioSrc}></audio>
			{button}
		</div>
	);
}

AudioDiv.propTypes = {
	button: PropTypes.string.isRequired,
	audioSrc: PropTypes.string.isRequired,
	buttonId: PropTypes.string.isRequired,
	power: PropTypes.bool.isRequired,
	setDescribe: PropTypes.func.isRequired,
	volume: PropTypes.number.isRequired,
};

function Buttons({ setDescribe, power, volume, piano }) {
	console.log('rendering')
	const src = [
		{
			button: 'Q',
			type: 'Heater-1',
			type2: 'Chord-1',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
			src2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
		},
		{
			button: 'W',
			type: 'Heater-2',
			type2: 'Chord-2',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
			src2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
		},
		{
			button: 'E',
			type: 'Heater-3',
			type2: 'Chord-3',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
			src2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
		},
		{
			button: 'A',
			type: 'Heater-4',
			type2: 'Shaker',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
			src2:
				'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
		},
		{
			button: 'S',
			type: 'Clap',
			type2: 'Open-HH',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
			src2: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
		},
		{
			button: 'D',
			type: 'Open-HH',
			type2: 'Closed-HH',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
			src2: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
		},
		{
			button: 'Z',
			type: `Kick-n'-Hat`,
			type2: 'Punchy-Kick',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
			src2:
				'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
		},
		{
			button: 'X',
			type: 'Kick',
			type2: 'Side-Stick',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
			src2:
				'src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"',
		},
		{
			button: 'C',
			type: 'Closed-HH',
			type2: 'Snare',
			src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
			src2: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
		},
	];

	console.log(piano)

	return (
		<div className='buttons'>
			{src.map((item, idx) => (
				<AudioDiv
					setDescribe={setDescribe}
					key={idx}
					button={item.button}
					audioSrc={piano ? item.src2 : item.src}
					buttonId={piano ? item.type2 : item.type}
					power={power}
					volume={volume}
				/>
			))}
		</div>
	);
}

Buttons.propTypes = {
	setDescribe: PropTypes.func.isRequired,
	power: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired,
	piano: PropTypes.bool.isRequired,
};

export default Buttons;
