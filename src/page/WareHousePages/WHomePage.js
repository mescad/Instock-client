import "./WHomePage.scss";
import warehouseData from "../../asset/data/warehouses.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import TableHeader from "../../components/TableHeader/TableHeader";
import WarehouseListItem from "../../components/WarehouseListItem/WarehouseListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";

function WHomePage() {
	const [warehouses, setWarehouses] = useState(warehouseData);
	const tableSetting = [
		{
			name: "WAREHOUSE",
			width: "20%",
		},
		{
			name: "ADDRESS",
			width: "20%",
		},
		{
			name: "CONTACT NAME",
			width: "27%",
		},
		{
			name: "CONTACT INFORMATION",
			width: "33%",
		},
	];
	return (
		<>
			<section className="heading">
				<h1 className="heading__title">Warehouses</h1>
				<div className="heading__right-wrapper">
                    <SearchBar/>
                    <ButtonAdd buttonText={"+ Add New Warehouse"}/> 
                    {/* TODO confirm add new warehouse url */}
				</div>
			</section>
			<section className="warehouse-list">
				<section className="warehouse-list__table-header">
					<TableHeader tableSetting={tableSetting} />
				</section>
				<div className="warehouse__wrapper">
					{warehouses.map((warehouse) => (
                        <WarehouseListItem warehouse={warehouse} tableSetting={tableSetting}/>
					))}
				</div>
			</section>
		</>
	);
}

export default WHomePage;
