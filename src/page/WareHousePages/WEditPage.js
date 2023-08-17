import axios from "axios";
import "./WEditPage.scss";
import EditWarehouse from "../../components/EditWareshouse/EditWarehouse.js";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ArrowBack from "../../components/ArrowBack/ArrowBack";

function WEditPage() {
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
  };

  return (
    <main className="edit-warehouse">
      <div className="edit-warehouse__wrapper">
        <ArrowBack />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <section className="edit-warehouse__section">
        <EditWarehouse
          page={`edit-warehouse`}
          buttonText={"Save"}
          handleForm={handleForm}
          pageToLoad={pageToLoad}
        />
      </section>
    </main>
  );
}

export default WEditPage;
