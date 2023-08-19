import "./ItemAddPage.scss";
import arrowBack from "../../asset/Icons/arrow_back-24px.svg";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { useParams } from "react-router";
import { useState } from "react";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ItemEditPage() {
	const [touch, setTouch] = useState(false);
	const { itemId } = useParams();
	function handleSubmit(e,formValue, formValid) {
		e.preventDefault();
		setTouch(true);
        if(formValue.status === "Out of stock"){
            formValid.quantity.valid = true;
        }
		const validateAll = Object.entries(formValid).map(field=>field[1].valid).every((valid) => valid);
		if (validateAll) {
			axios
				.put(`${DOMAIN}:${PORT}/api/inventories/${itemId}`, formValue)
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
				<h1 className="section-title-wrapper__title">Edit Inventory Item</h1>
			</div>
			<InventoryForm
				formAction="edit"
				handleSubmit={handleSubmit}
				defaultInventoryID={Number(itemId)}
				touch={touch}
			/>
		</section>
	);
}

export default ItemEditPage;
