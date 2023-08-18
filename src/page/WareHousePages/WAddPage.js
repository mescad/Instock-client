import "./WAddPage.scss";

import AddEditWarehouse from "../../components/AddEditWareshouse/AddEditWarehouse.js";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import axios from "axios";

function WAddPage({action}) {
  const handleForm = (e) => {
    e.preventDefault();
    const target = e.target;
    if (
      !target.warehouse_name.value ||
      !target.address.value ||
      !target.city.value ||
      !target.country.value ||
      !target.contact_name.value ||
      !target.contact_position.value ||
      !target.contact_phone.value ||
      !target.contact_email.value
    ) {
      return alert("Please complete all the fields!");
    }

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
    
    axios
      .post("http://localhost:8080/api/warehouses", warehouse)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
        />
      </section>
    </main>
  );
}

export default WAddPage;
