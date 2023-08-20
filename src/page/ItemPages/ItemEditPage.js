import './ItemAddPage.scss';
import axios from 'axios';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import ModalNotification from '../../components/ModalNotification/ModalNotification';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ItemEditPage({
  setNotificationModal,
  setInventoriesActive,
  setWarehouseActive
}) {
  useEffect(()=>{
    setWarehouseActive('nav-list__link');
    setInventoriesActive('nav-list__link--active');
  },[])

  const [touch, setTouch] = useState(false);
  const navigate = useNavigate();
  const { itemId } = useParams();
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
        .put(`${DOMAIN}:${PORT}/api/inventories/${itemId}`, formValue)
        .then(res => {
          setNotificationModal([
            <ModalNotification
              modalTitle="Inventory item updated"
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

  return (
    <section className="section">
      <div className="section-title-wrapper">
        <ArrowBack />
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
