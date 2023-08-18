import axios from "axios";
import "./WEditPage.scss";
import AddEditWarehouse from "../../components/AddEditWareshouse/AddEditWarehouse.js";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ArrowBack from "../../components/ArrowBack/ArrowBack";

function WEditPage({action}) {
  const [warehouse, setWarehouse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {warehousesId} = useParams();

  const pageToLoad = warehousesId ? warehousesId : false

  

  const handleForm = (e) => {
    e.preventDefault();
    const ev = e.target;

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
      .put(`http://localhost:8080/api/warehouses/${warehousesId}`, warehouse)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
