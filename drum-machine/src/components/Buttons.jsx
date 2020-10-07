import React, { useEffect } from 'react'


function Buttons() {


	const blink = (node) => {
		node.classList.toggle('drum-pad-active');
		// play audio here
		setTimeout(() => {
		node.classList.toggle('drum-pad-active');
		}, 100) 
	}
	useEffect(() => {
		let classes = document.getElementsByClassName('drum-pad');
		classes = Array.from(classes);

		// key presses
		document.addEventListener('keypress', (e) => {
			classes.forEach((node) => {
				if (`Key${node.innerText}` === e.code){
					blink(node);
			}
			})
		});

		// on click
		classes.forEach ((node) => {
			node.addEventListener('click', () => {
				blink(node)
			})
		})
	}, [])
	
	return (
		<div className="buttons">
				<div className="drum-pad" id="q-button">Q</div>
				<div className="drum-pad" id="w-button">W</div>
				<div className="drum-pad" id="e-button">E</div>
				<div className="drum-pad" id="a-button">A</div>
				<div className="drum-pad" id="s-button">S</div>
				<div className="drum-pad" id="d-button">D</div>
				<div className="drum-pad" id="z-button">Z</div>
				<div className="drum-pad" id="x-button">X</div>
				<div className="drum-pad" id="c-button">C</div>	
		</div>
	)
}

export default Buttons
