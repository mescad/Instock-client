import "./warehouseInventory.scss";

function warehouseInventory({ name, status, quantity, category }) {
  return (
    <section className="item">
      <div className="item__section">
        <div className="item__group">
          <h3> INVENTORY ITEM</h3>
          <p>{name} </p>
        </div>

        <div className="item__group">
          <h3>STATUS </h3>
          <p>{status}</p>
        </div>
      </div>

      <div className="item__section">
        <div className="item__group">
          <h3>CATEGORY </h3>
          <p>{category}</p>
        </div>

        <div className="item__group">
          <h3> QTY</h3>
          <p> {quantity}</p>
        </div>
      </div>

      <div className="item__section">
        <div className="item__group item__group-buttons">
          <button>DEL</button>
          <button>EDIT</button>
        </div>
      </div>
    </section>
  );
}

export default warehouseInventory;
