import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./InventoryForm.scss";
import FormFieldError from "../FormFieldError/FormFieldError";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function InventoryForm({
	formAction,
	handleSubmit,
	defaultInventoryID,
	touch,
}) {
	const formDefaultValue = {
		item_name: "",
		category: "",
		description: "",
		status: "In Stock",
		quantity: 0,
		warehouse_id: "",
	};
	const isEdit = formAction === "edit";
	const formValidation = {
		item_name: { valid: isEdit, error: "" },
		category: { valid: isEdit, error: "" },
		description: { valid: isEdit, error: "" },
		status: { valid: isEdit, error: "" },
		quantity: { valid: isEdit, error: "" },
		warehouse_id: { valid: isEdit, error: "" },
	};
	const [formValue, setFormValue] = useState(formDefaultValue);
	const [formValid, setFormValid] = useState(formValidation);
	const [warehouses, setWarehouses] = useState(null);
	const [categories, setCategories] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const objAryReduceUnique = (key, Ary) => {
		return [...new Set(Ary.map((entry) => entry[key]))];
	};

	const getWarehouses = axios
		.get(`${DOMAIN}:${PORT}/api/warehouses`)
		.then((res) => res.data);

	const getInventories = axios
		.get(`${DOMAIN}:${PORT}/api/inventories`)
		.then((res) => res.data);

	useEffect(() => {
		Promise.all([getWarehouses, getInventories]).then((res) => {
			const [warehouseRes, inventoriesRes] = res;
			setCategories(objAryReduceUnique("category", inventoriesRes));
			setWarehouses(warehouseRes);
			if (formAction === "edit") {
				const inventory = inventoriesRes.find(
					(inventory) => inventory.id === defaultInventoryID
				);
				const newDefaultFormValue = {
					item_name: inventory.item_name,
					category: inventory.category,
					description: inventory.description,
					status: inventory.status,
					quantity: inventory.quantity,
					warehouse_id: warehouseRes.find(
						(warehouse) => warehouse.warehouse_name === inventory.warehouse_name
					)["id"],
				};
				setFormValue(newDefaultFormValue);
			}
			setIsLoading(false);
		});
	}, []);

	const handleInputChange = (e) => {
		let { name, value, type } = e.target;
		let valid = true;
		let error = "";
		if (value === "" || value === undefined) {
			valid = false;
			error = "This field is required";
		} else if (
			name === "quantity" &&
			Number(value) <= 0 &&
			formValue.status === "In Stock"
		) {
			valid = false;
			error = `When status set as in stock, quantity cannot be ${value}`;
		} else if (type === "select-one" && value === "Please select") {
			valid = false;
			error = "This field is required";
		}
		if (name === "quantity") {
			value = Number(value);
		}
		setFormValue({
			...formValue,
			[name]: value,
		});
		setFormValid({
			...formValid,
			[name]: { valid: valid, error: error },
		});
	};

	if (isLoading) {
		return;
	}

	return (
		<form
			className="inventory-form"
			onSubmit={(e) => {
				handleSubmit(e, formValue, formValid);
			}}
		>
			<div className="inventory-form__main-wrapper">
				<div className="inventory-form__side-wrapper inventory-form__side-wrapper--border">
					<h2 className="inventory-form__title">Item Details</h2>
					<div className="inventory-form__input-wrapper">
						<label>
							Item Name
							<input
								className={`inventory-form__input ${touch && !formValid.item_name.valid ? "inventory-form__input--error" : ""}`}
								name="item_name"
								placeholder="Item Name"
								value={formValue.item_name}
								onChange={handleInputChange}
							/>
							<FormFieldError
								fieldName="item_name"
								formValidation={formValid}
								touch={touch}
							/>
						</label>
					</div>
					<div className="inventory-form__input-wrapper">
						<label>
							Description
							<textarea
								className={`inventory-form__input inventory-form__input--text-area ${touch && !formValid.description.valid ? "inventory-form__input--error" : ""}`}
								name="description"
								placeholder="Please enter a brief item description"
								value={formValue.description}
								onChange={handleInputChange}
							/>
							<FormFieldError
								fieldName="description"
								formValidation={formValid}
								touch={touch}
							/>
						</label>
					</div>
					<div className="inventory-form__input-wrapper">
						<label>
							Category
							<select
								name="category"
								className={`inventory-form__input inventory-form__input--select ${touch && !formValid.category.valid ? "inventory-form__input--error" : ""}`}
								value={formValue.category}
								onChange={handleInputChange}
							>
								<option value={null}>Please select</option>
								{categories.map((category, index) => {
									return (
										<option key={index} value={category}>
											{category}
										</option>
									);
								})}
							</select>
							<FormFieldError
								fieldName="category"
								formValidation={formValid}
								touch={touch}
							/>
						</label>
					</div>
				</div>
				<div className="inventory-form__side-wrapper">
					<h2 className="inventory-form__title">Item Availability</h2>

					<h3 className="inventory-form__subtitle">Status</h3>
					<div className="inventory-form__input-wrapper inventory-form__radio-wrapper ">
						<label>
							<input
								onChange={handleInputChange}
								defaultChecked={formValue.status === "In Stock"}
								type="radio"
								name="status"
								value="In Stock"
							/>
							In stock
						</label>
						<label>
							<input
								onChange={handleInputChange}
								defaultChecked={formValue.status === "Out of Stock"}
								type="radio"
								name="status"
								value="Out of Stock"
							/>
							Out of stock
						</label>
						<FormFieldError
							fieldName="status"
							formValidation={formValid}
							touch={touch}
						/>
					</div>
					{formValue.status === "In Stock" && (
						<div className="inventory-form__input-wrapper inventory-form__qty-wrapper">
							<label>
								Quantity
								<input
									name="quantity"
									type="number"
									className={`inventory-form__input ${touch && !formValid.quantity.valid ? "inventory-form__input--error" : ""}`}
									placeholder="0"
									value={formValue.quantity}
									onChange={handleInputChange}
								/>
							</label>
							<FormFieldError
								fieldName="quantity"
								formValidation={formValid}
								touch={touch}
							/>
						</div>
					)}
					<div className="inventory-form__input-wrapper">
						<label>
							Warehouse
							<select
								name="warehouse_id"
								className={`inventory-form__input inventory-form__input--select ${touch && !formValid.warehouse_id.valid ? "inventory-form__input--error" : ""}`}
								value={formValue.warehouse_id}
								onChange={handleInputChange}
							>
								<option value={null}>Please select</option>
								{warehouses.map((warehouse) => {
									return (
										<option key={warehouse.id} value={warehouse.id}>
											{warehouse.warehouse_name}
										</option>
									);
								})}
							</select>
							<FormFieldError
								fieldName="warehouse_id"
								formValidation={formValid}
								touch={touch}
							/>
						</label>
					</div>
				</div>
			</div>
			<div className="inventory-form__button-wrapper">
				<Link
					to={"/inventories"}
					className="inventory-form__button inventory-form__button--link"
				>
					Cancel
				</Link>
				<button
					type="submit"
					className="inventory-form__button inventory-form__button--blue"
				>
					{formAction === "add" ? "+ Add Item" : "Save"}
				</button>
			</div>
		</form>
	);
}

export default InventoryForm;
