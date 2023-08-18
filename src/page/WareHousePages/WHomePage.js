import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TableHeader from "../../components/TableHeader/TableHeader";
import WarehouseListItem from "../../components/WarehouseListItem/WarehouseListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import "./WHomePage.scss";

function WHomePage() {
  const [warehouses, setWarehouses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const tableSetting = [
    {
      name: "WAREHOUSE",
      width: "20%",
    },
    {
      name: "ADDRESS",
      width: "20%",
    },
    {
      name: "CONTACT NAME",
      width: "27%",
    },
    {
      name: "CONTACT INFORMATION",
      width: "33%",
    },
  ];

  const [displayDeleteModal, setDisplayDeleteModal] = useState([]); // set state for delete modal
  const refreshTableFunc = () => {
    // refactor useeffect api as a function so that can be pass down to refresh data
    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_PORT}/api/warehouses`
      )
      .then((res) => {
        setIsLoading(false);
        setWarehouses(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    // refactor useeffect to use refresh table function
    refreshTableFunc();
  }, []);

  if (isLoading) {
    return;
  }

  return (
    <>
      <section className="heading">
        <h1 className="heading__title">Warehouses</h1>
        <div className="heading__right-wrapper">
          <SearchBar />
          <Link to="/warehouses/add">
            <ButtonAdd buttonText={"+ Add New Warehouse"} />
          </Link>
        </div>
      </section>

      <section className="warehouse-list">
        <section className="warehouse-list__table-header">
          <TableHeader tableSetting={tableSetting} />
        </section>
        <div className="warehouse__wrapper">
          {warehouses.map((warehouse) => (
            <WarehouseListItem // add new props to list items
              warehouse={warehouse}
              tableSetting={tableSetting}
              key={warehouse.id}
              refreshTableFunc={refreshTableFunc}
              setDisplayDeleteModal={setDisplayDeleteModal}
            />
          ))}
        </div>
      </section>
      {displayDeleteModal.map((deleteModal) => deleteModal)}
    </>
  );
}

export default WHomePage;
