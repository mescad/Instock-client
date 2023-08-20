import WarehouseDetail from '../../components/WarehouseDetail/warehouseDetail';
import WarehouseInventory from '../../components/WarehouseInventory/warehouseInventory';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Wdetail.scss';
import WInventoryHeader from '../../components/WInventoryHeader/WInventoryHeader';
import ModalNotification from '../../components/ModalNotification/ModalNotification';

function WDetail({
  setNotificationModal,
  setWarehouseActive,
  setInventoriesActive
}) {
  const [currentWarehouse, setCurrentWarehouse] = useState(null);
  const [currentInventory, setCurrentInventory] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [isLoadingInventory, setIsLoadingInventory] = useState(true);

  const tableSetting = [
    {
      name: 'INVENTORY ITEM',
      width: '30%'
    },
    {
      name: 'CATEGORY',
      width: '20%'
    },
    {
      name: 'STATUS',
      width: '27%'
    },
    {
      name: 'QUANTITY',
      width: '23%'
    }
  ];

  const [displayDeleteModal, setDisplayDeleteModal] = useState([]); // set state for delete modal
  const refreshTableFunc = () => {
    // refactor useeffect api as a function so that can be pass down to refresh data
    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_PORT}/api/warehouses/${params.id}`
      )
      .then(response => {
        setCurrentWarehouse(response.data);
        setIsLoadingDetails(false);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_PORT}/api/warehouses/${params.id}/inventories`
      )
      .then(response => {
        setCurrentInventory(response.data);
        setIsLoadingInventory(false);
      })
      .catch(error => {
        console.log(error);
        setNotificationModal([
          <ModalNotification
            modalTitle="Error getting warehouse data"
            modalDescription={error.message ? error.message : ''}
            setNotificationModal={setNotificationModal}
          />
        ]);
      });
  };

  useEffect(() => {
    // refactor useeffect to use refresh table function
    refreshTableFunc();
    //eslint-disable-next-line
    setWarehouseActive('nav-list__link--active');
    setInventoriesActive('nav-list__link');
  }, []);

  const params = useParams();

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
        id={currentWarehouse.id}
      />

      <div className="wdetail__sorter">
        <WInventoryHeader tableSetting={tableSetting} />
      </div>

      {currentInventory.map(item => {
        return (
          <WarehouseInventory
            key={item.id}
            id={item.id}
            name={item.item_name}
            category={item.category}
            status={item.status}
            quantity={item.quantity}
            tableSetting={tableSetting}
            refreshTableFunc={refreshTableFunc}
            setDisplayDeleteModal={setDisplayDeleteModal}
          />
        );
      })}

      {displayDeleteModal.map(deleteModal => deleteModal)}
    </section>
  );
}

export default WDetail;
