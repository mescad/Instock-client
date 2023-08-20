import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import TableHeader from "../../components/TableHeader/TableHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem";
import ModalNotification from "../../components/ModalNotification/ModalNotification";
import SearchWithNoResult from "../../components/SearchWithNoResult/SearchWithNoResult";
import "./ItemHomePage.scss";

function ItemHomePage({ setNotificationModal }) {
	const [inventories, setInventories] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const search = useLocation().search;
	const searchInput = new URLSearchParams(search).get("search_input");
	const tableSetting = [
		{
			name: "INVENTORIES ITEM",
			width: "25%",
		},
		{
			name: "CATEGORY",
			width: "20%",
		},
		{
			name: "STATUS",
			width: "20%",
		},
		{
			name: "QTY",
			width: "10%",
		},
		{
			name: "WAREHOUSE",
			width: "25%",
		},
	];

	const [displayDeleteModal, setDisplayDeleteModal] = useState([]); // set state for delete modal
	const refreshTableFunc = () => {
		// refactor useeffect api as a function so that can be pass down to refresh data
		axios
			.get(
				`${process.env.REACT_APP_API_DOMAIN}:${
					process.env.REACT_APP_PORT
				}/api/inventories${searchInput ? `?s=${searchInput}` : ""}`
			)
			.then((res) => {
				setIsLoading(false);
				setInventories(res.data);
			})
			.catch((err) => {
				setNotificationModal([
					<ModalNotification
						modalTitle="Error getting inventory data"
						modalDescription={err.message ? err.message : ""}
						setNotificationModal={setNotificationModal}
					/>,
				]);
			});
	};

	useEffect(() => {
		// refactor useeffect to use refresh table function
		refreshTableFunc();
	}, []);

	if (isLoading) {
		return;
	}

	return (
		<>
			<section className="heading">
				<h1 className="heading__title">Inventories</h1>
				<div className="heading__right-wrapper">
					<SearchBar currentSearchInput={searchInput} />
					<Link to="/inventories/add">
						<ButtonAdd buttonText={"+ Add New Item"} />
					</Link>
				</div>
			</section>

			<section className="inventory-list">
				<section className="inventory-list__table-header">
					<TableHeader tableSetting={tableSetting} />
				</section>
				<div className="inventory__wrapper">
					{inventories.map((inventory) => (
						<InventoryListItem
							key={inventory.id}
							id={inventory.id}
							name={inventory.item_name}
							category={inventory.category}
							status={inventory.status}
							quantity={inventory.quantity}
							warehouse={inventory.warehouse_name}
							tableSetting={tableSetting}
							refreshTableFunc={refreshTableFunc}
							setDisplayDeleteModal={setDisplayDeleteModal}
						/>
					))}
					{searchInput && inventories.length === 0 && (
						<SearchWithNoResult
							searchInput={searchInput}
							searchObject="inventory item"
						/>
					)}
				</div>
			</section>
			{displayDeleteModal.map((deleteModal) => deleteModal)}
		</>
	);
}

export default ItemHomePage;
