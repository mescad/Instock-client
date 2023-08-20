import "./ButtonModal.scss";

/**
 * @param {String} buttonText The button text on the button
 * @param {String} buttonType The button type either primary or secondary which will lead to different style
 * @param {Function} onClickFunc A fucntion to execute when user click the button
 * @returns
 */

function ButtonModal({buttonText, onClickFunc, buttonType}) {
	return (
		<button
			className={`modal-btn modal-btn--${buttonType}`}
			onClick={onClickFunc}
		>
			<h3 className={`modal-btn__text modal-btn__text--${buttonType}`}>
				{buttonText}
			</h3>
		</button>
	);
}

export default ButtonModal;
