const {
	useEffect,
	useState
} = require("react");


function useKeyPress(targetKey) {
	// State for keeping track of whether key is pressed
	const [keyPressed, setKeyPressed] = useState(false);



	// Add event listeners
	useEffect(() => {
		const pressHandler = ({
			key
		}) => {
			if (key === targetKey) {
				setKeyPressed(true);
				setTimeout(() => {
					setKeyPressed(false)
				}, 100)
			}
		};
		window.addEventListener('keydown', pressHandler);
		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener('keydown', pressHandler);
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return keyPressed;
}

export default useKeyPress;