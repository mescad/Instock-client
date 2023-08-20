import "./WAddPage.scss";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import AddEditWarehouse from "../../components/AddEditWareshouse/AddEditWarehouse.js";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import axios from "axios";
import ModalNotification from "../../components/ModalNotification/ModalNotification";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function WAddPage({
  action,
  setNotificationModal,
  setWarehouseActive,
  setInventoriesActive
}) {

  const [touch, setTouch] = useState(false);

  const navigate = useNavigate();

  const handleForm = (e, inputText, formValid) => {
    e.preventDefault();
    const target = e.target;
    setTouch(true);

    //

    const validateAll = Object.entries(formValid)
      .map((field) => field[1].valid)
      .every((valid) => valid);

    //

    if (validateAll) {
      axios
        .post(`${DOMAIN}:${PORT}/api/warehouses`, inputText)
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

  useEffect(()=>{
    setWarehouseActive('nav-list__link--active');
    setInventoriesActive('nav-list__link');
  },[])

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
