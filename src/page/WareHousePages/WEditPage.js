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

function WEditPage({ action, setNotificationModal }) {
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { warehousesId } = useParams();

  const pageToLoad = warehousesId ? warehousesId : false;

  const handleForm = (e) => {
    e.preventDefault();
    const ev = e.target;
    console.log(e.target.body);
    if (
      !ev.warehouse_name.value ||
      !ev.address.value ||
      !ev.city.value ||
      !ev.country.value ||
      !ev.contact_name.value ||
      !ev.contact_position.value ||
      !ev.contact_phone.value ||
      !ev.contact_email.value
    ) {
      return alert("Please complete all the fields!");
    }

    const warehouse = {
      warehouse_name: `${ev.warehouse_name.value}`,
      address: `${ev.address.value}`,
      city: `${ev.city.value}`,
      country: `${ev.country.value}`,
      contact_name: `${ev.contact_name.value}`,
      contact_position: `${ev.contact_position.value}`,
      contact_phone: `${ev.contact_phone.value}`,
      contact_email: `${ev.contact_email.value}`,
    };

    axios
      .put(`${DOMAIN}:${PORT}/api/warehouses/${warehousesId}`, warehouse)
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

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <main className="edit-warehouse">
      <div className="edit-warehouse__wrapper">
        <ArrowBack />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <section className="edit-warehouse__section">
        <AddEditWarehouse
          page={`edit-warehouse`}
          buttonText={"Save"}
          handleForm={handleForm}
          pageToLoad={pageToLoad}
          action={action}
        />
      </section>
    </main>
  );
}

export default WEditPage;
