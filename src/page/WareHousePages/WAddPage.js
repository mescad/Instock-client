import "./WAddPage.scss";
import { useNavigate } from "react-router";
import { useState } from "react";
import AddEditWarehouse from "../../components/AddEditWareshouse/AddEditWarehouse.js";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import axios from "axios";
import ModalNotification from "../../components/ModalNotification/ModalNotification";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;


function WAddPage({ action, setNotificationModal }) {
  const [touch, setTouch] = useState(false);

  const navigate = useNavigate();


  const handleForm = (e, inputText, formValid) => {
    e.preventDefault();
    const target = e.target;
    setTouch(true);

    const warehouse = {
      warehouse_name: `${target.warehouse_name.value}`,
      address: `${target.address.value}`,
      city: `${target.city.value}`,
      country: `${target.country.value}`,
      contact_name: `${target.contact_name.value}`,
      contact_position: `${target.contact_position.value}`,
      contact_phone: `${target.contact_phone.value}`,
      contact_email: `${target.contact_email.value}`,
    };

    //

    const validateAll = Object.entries(formValid)
      .map((field) => field[1].valid)
      .every((valid) => valid);

    //

    if (validateAll) {
      axios
        .post(`${DOMAIN}:${PORT}/api/warehouses`, warehouse)
        .then((response) => {
          setNotificationModal([
            <ModalNotification
              modalTitle="New warehouse added"
              modalDescription="Click OK to return to warehouse page."
              setNotificationModal={setNotificationModal}
              onCloseFunc={() => navigate("/warehouses")}
            />,
          ]);
        })
        .catch((err) => {
          setNotificationModal([
            <ModalNotification
              modalTitle="Error getting warehouse data"
              modalDescription={
                err.response.data.message ? err.response.data.message : ""
              }
              setNotificationModal={setNotificationModal}
            />,
          ]);
        });
    }
  };

  const page = "add-new-warehouse";
  return (
    <main className={page}>
      <div className={`${page}__wrapper-title`}>
        <ArrowBack />
        <h1 className="add-new-warehouse__title">Add New Warehouse</h1>
      </div>
      <section>
        <AddEditWarehouse
          buttonText={`+ Add Warehouse`}
          page={`add-new-warehouse`}
          handleForm={handleForm}
          action={action}
          touch={touch}
        />
      </section>
    </main>
  );
}

export default WAddPage;
