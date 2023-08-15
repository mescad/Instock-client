import warehouseData from "../../asset/data/warehouses.json";
import inventoryData from "../../asset/data/inventories.json";
import WarehouseDetail from "../../components/WarehouseDetail/warehouseDetail";
import WarehouseInventory from "../../components/WarehouseInventory/warehouseInventory";
import { useState } from "react";

function WDetail() {
  const [currentWarehouse, setCurrentWarehouse] = useState(warehouseData[0]);
  //const [isLoading, setIsLoading] = useState(true)

  const currentInventory = inventoryData.filter(
    (e) => e.warehouse_id === currentWarehouse.id
  );

  

  return (
    <section>
      <WarehouseDetail
        key={currentWarehouse.warehouse_id}
        address={currentWarehouse.address}
        position={currentWarehouse.contact_position}
        name={currentWarehouse.contact_name}
        phone={currentWarehouse.contact_phone}
        email={currentWarehouse.contact_email}
      />

      {currentInventory.map((item) => {
        return (
          <WarehouseInventory
            key={item.id}
            name={item.item_name}
            category={item.category}
            status={item.status}
            quantity={item.quantity}
          />
        );
      })}
    </section>
  );
}

export default WDetail;
