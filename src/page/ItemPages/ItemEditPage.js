import "./ItemAddPage.scss";
import arrowBack from "../../asset/Icons/arrow_back-24px.svg";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { useParams } from "react-router";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ItemEditPage() {
    const {itemId} = useParams()
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
        if(!form.quantity){
            form.quantity = {
                value:0
            }
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
			.put(`${DOMAIN}:${PORT}/api/inventories/${itemId}`, newItem)
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
				<h1 className="section-title-wrapper__title">Edit Inventory Item</h1>
			</div>
			<InventoryForm
				formAction="edit"
				handleSubmit={handleSubmit}
                defaultInventoryID={Number(itemId)}
			/>
		</section>
	);
}

export default ItemEditPage;
