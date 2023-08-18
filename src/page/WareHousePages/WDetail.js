import WarehouseDetail from "../../components/WarehouseDetail/warehouseDetail";
import WarehouseInventory from "../../components/WarehouseInventory/warehouseInventory";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Wdetail.scss";
import WInventoryHeader from "../../components/WInventoryHeader/WInventoryHeader";

function WDetail() {
  const [currentWarehouse, setCurrentWarehouse] = useState(null);
  const [currentInventory, setCurrentInventory] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [isLoadingInventory, setIsLoadingInventory] = useState(true);
  const tableSetting = [
		{
			name: "INVENTORY ITEM",
			width: "30%",
		},
		{
			name: "CATEGORY",
			width: "20%",
		},
		{
			name: "STATUS",
			width: "27%",
		},
		{
			name: "QUANTITY",
			width: "23%",
		},
	];
	


  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${params.id}`)
      .then((response) => {
        setCurrentWarehouse(response.data);
        setIsLoadingDetails(false);
      })
      .catch((error) => {
        console.log(error);
      });
      // eslint-disable-next-line
  },[]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${params.id}/inventories`)
      .then((response) => {
        setCurrentInventory(response.data);
        setIsLoadingInventory(false);
      })
      .catch((error) => {
        console.log(error);
      });
      // eslint-disable-next-line
  },[]);

  if (isLoadingDetails || isLoadingInventory) {
    return <h1> Checking pages</h1>;
  }

  return (
    <section className="wdetail__wrapper">
      <WarehouseDetail
        key={currentWarehouse.warehouse_id}
        address={currentWarehouse.address}
        position={currentWarehouse.contact_position}
        name={currentWarehouse.contact_name}
        phone={currentWarehouse.contact_phone}
        email={currentWarehouse.contact_email}
        warehouseName={currentWarehouse.warehouse_name}
        city={currentWarehouse.city}
        country={currentWarehouse.country}
      />

       <div className="wdetail__sorter"> 
      <WInventoryHeader tableSetting={tableSetting}/>
      </div>

      {currentInventory.map((item) => {
        return (
          <WarehouseInventory
            key={item.id}
            id={item.id}
            name={item.item_name}
            category={item.category}
            status={item.status}
            quantity={item.quantity}
            tableSetting={tableSetting}
          />
        );
      })}
    </section>
  );
}

export default WDetail;
