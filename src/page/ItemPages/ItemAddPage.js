import "./ItemAddPage.scss";
import arrowBack from "../../asset/Icons/arrow_back-24px.svg";
import axios from "axios";
import { useState } from "react";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function AddInventoryItem() {
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;

		if (
			!form.itemName.value ||
			!form.category.value ||
			!form.description.value ||
			!form.warehouseId.value
		) {
			return;
		}

		if (form.status.value === "In Stock" && !form.quantity.value) {
			return;
		}

		const newItem = {
			item_name: form.itemName.value,
			category: form.category.value,
			description: form.description.value,
			status: form.status.value,
			quantity: parseInt(form.quantity.value),
			warehouse_id: parseInt(form.warehouseId.value),
		};

		axios
			.post(`${DOMAIN}:${PORT}/api/inventories`, newItem)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
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
			/>
		</section>
	);
}

export default AddInventoryItem;
