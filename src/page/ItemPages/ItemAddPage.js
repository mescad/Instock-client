import './ItemAddPage.scss';
import axios from 'axios';
import { useNavigate } from 'react-router';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import { useEffect, useState } from 'react';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import ModalNotification from '../../components/ModalNotification/ModalNotification';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ItemAddPage({
  setNotificationModal,
  setInventoriesActive,
  setWarehouseActive
}) {
  const navigate = useNavigate();
  const [touch, setTouch] = useState(false);

  function handleSubmit(e, formValue, formValid) {
    e.preventDefault();
    setTouch(true);
    if (formValue.status === 'Out of stock') {
      formValid.quantity.valid = true;
    }
    const validateAll = Object.entries(formValid)
      .map(field => field[1].valid)
      .every(valid => valid);
    if (validateAll) {
      axios
        .post(`${DOMAIN}:${PORT}/api/inventories`, formValue)
        .then(res => {
          setNotificationModal([
            <ModalNotification
              modalTitle="New inventory item added"
              modalDescription="Click OK to return to inventory page."
              setNotificationModal={setNotificationModal}
              onCloseFunc={() => navigate('/inventories')}
            />
          ]);
        })
        .catch(err => {
          setNotificationModal([
            <ModalNotification
              modalTitle="Error creating inventory item"
              modalDescription={
                err.response.data.message ? err.response.data.message : ''
              }
              setNotificationModal={setNotificationModal}
            />
          ]);
        });
    }
  }

  useEffect(()=>{
    setWarehouseActive('nav-list__link');
    setInventoriesActive('nav-list__link--active');
  },[])

  return (
    <section className="section">
      <div className="section-title-wrapper">
        <ArrowBack />
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
