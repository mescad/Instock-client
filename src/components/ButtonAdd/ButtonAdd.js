import "./ButtonAdd.scss";

function ButtonAdd({buttonText}) {
	return (
		<button className="button-add">
			<h3 className="button-add__text">{buttonText}</h3>
		</button>
	);
}

export default ButtonAdd;
