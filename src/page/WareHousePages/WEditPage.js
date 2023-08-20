import axios from "axios";
import "./WEditPage.scss";
import AddEditWarehouse from "../../components/AddEditWareshouse/AddEditWarehouse.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import ModalNotification from "../../components/ModalNotification/ModalNotification";

const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function WEditPage({ action, setNotificationModal, setWarehouseActive, setInventoriesActive }) {
  const navigate = useNavigate();
  
  const [touch, setTouch] = useState(false);
  const { warehousesId } = useParams();

  const pageToLoad = warehousesId ? warehousesId : false;

  const handleForm = (e, inputText, formValid) => {
    e.preventDefault();
    
    setTouch(true);

    const validateAll = Object.entries(formValid)
      .map((field) => field[1].valid)
      .every((valid) => valid);

    if (validateAll) {
      axios
        .put(`${DOMAIN}:${PORT}/api/warehouses/${warehousesId}`, inputText)
        .then((response) => {
          setNotificationModal([
            <ModalNotification
              modalTitle="Warehouse updated"
              modalDescription="Click OK to return to warehouse page."
              setNotificationModal={setNotificationModal}
              onCloseFunc={() => navigate("/warehouses")}
            />,
          ]);
        })
        .catch((err) => {
          console.log(err);
          setNotificationModal([
            <ModalNotification
              modalTitle="Error getting warehouse data"
              modalDescription={err.message ? err.message : ""}
              setNotificationModal={setNotificationModal}
            />,
          ]);
        });
    }
  };

  useEffect(()=>{
    setWarehouseActive('nav-list__link--active');
    setInventoriesActive('nav-list__link');
  },[])

  return (
    <main className="edit-warehouse">
      <div className="edit-warehouse__wrapper">
        <ArrowBack />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <section className="edit-warehouse__section">
        <AddEditWarehouse
          page={`edit-warehouse`}
          buttonText={'Save'}
          handleForm={handleForm}
          pageToLoad={pageToLoad}
          action={action}
          touch={touch}

        />
      </section>
    </main>
  );
}

export default WEditPage;
