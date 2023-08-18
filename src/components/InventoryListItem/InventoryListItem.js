import "./InventoryListItem.scss";
import { Link } from "react-router-dom";
import chevronIcon from "../../asset/Icons/chevron_right-24px.svg";
import ModalDelete from "../../components/ModalDelete/ModalDelete"

function InventoryListItem({
  id,
  name,
  status,
  quantity,
  category,
  warehouse,
  tableSetting,
  refreshTableFunc, 
	setDisplayDeleteModal,
}) {
  const displayDeleteModal = () => {   
		setDisplayDeleteModal([  // add setDisplayDeleteModal
			<ModalDelete
				deleteName={name}
				deleteType="inventory"
				id={id}
				setDisplayDeleteModal={setDisplayDeleteModal}
				refreshTableFunc={refreshTableFunc}
				key="1"
			/>,
		]);
	};

  return (
    <section className="item">
      <div className="item__wrapper">
        <section className="item__section item__section--left">
          <div className="item__group item__list-group-1">
            <h4 className="item__label"> {tableSetting[0].name}</h4>

            <Link to={`/inventories/${id}`} className="item__name-wrapper">
              <p className="item__name">{name} </p>
              <img
                src={chevronIcon}
                alt="Go to warehouse details"
                className="warehouse__go-to-icon"
              />
            </Link>
          </div>

          <div className="item__group item__list-group-2">
            <h4 className="item__label"> {tableSetting[1].name} </h4>
            <p>{category}</p>
          </div>
        </section>

        <section className="item__section item__section--right">
          <div className="item__group item__list-group-3">
            <h4 className="item__label"> {tableSetting[2].name} </h4>
            <div
              className={
                status === "In Stock"
                  ? "item__status-green"
                  : "item__status-red"
              }
            >
              <h4
                className={
                  status === "In Stock"
                    ? "item__status-button-green"
                    : "item__status-button-red"
                }
              >
                {status}
              </h4>
            </div>
          </div>

          <div className="item__group item__list-group-4">
            <h4 className="item__label"> {tableSetting[3].name}</h4>
            <p> {quantity}</p>
          </div>
          <div className="item__group item__list-group-5">
            <h4 className="item__label"> {tableSetting[4].name}</h4>
            <p> {warehouse}</p>
          </div>
        </section>
      </div>

      <div className="item__buttongroup">
        <button className="item__buttongroup--delete" onClick={displayDeleteModal}></button>
        <Link to={`/inventories/${id}/edit`}>
          <button className="item__buttongroup--edit"></button>
        </Link>
      </div>
    </section>
  );
}

export default InventoryListItem;
