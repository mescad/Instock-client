import "./ItemAddPage.scss";
import arrowBack from "../../asset/Icons/arrow_back-24px.svg";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { useState } from "react";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ItemAddPage() {
	const [touch, setTouch] = useState(false);
	function handleSubmit(e,formValue, formValid) {
		e.preventDefault();
		setTouch(true);
    if(formValue.status === "Out of stock"){
      formValid.quantity.valid = true;
  }
		const validateAll = Object.entries(formValid).map(field=>field[1].valid).every((valid) => valid);
		if (validateAll) {
			axios
				.post(`${DOMAIN}:${PORT}/api/inventories`, formValue)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}

	return (
		<section className="section">
			<div className="section-title-wrapper">
				<img className="arrow" src={arrowBack} alt="arrow pointing back" />
				<h1 className="section-title-wrapper__title">Add New Inventory Item</h1>
			</div>
			<InventoryForm
				formAction="add"
				handleSubmit={handleSubmit}
        touch={touch}
			/>
		</section>
	);
}

export default ItemAddPage;
