import "./warehouseInventory.scss";

function warehouseInventory({ name, status, quantity, category }) {
  
  console.log(status)

  let inStock= null

  // if (status==='In Stock'){
  //   return inStock===true} else{
  //     return inStock===false
  //   }
  
  
  return (

    
    <section className="item">
      

      <div className="item__box">  
      <div className="item__section">
        
        <div className="item__group">
          <h4> INVENTORY ITEM</h4>
          <h3>{name} </h3>
        </div>

        <div className="item__group">
          <h4>CATEGORY </h4>
          <p>{category}</p>
        </div>

        
      </div>
      

      <div className="item__section">
      <div className="item__group">
          <h4>STATUS </h4>
          <h4 className={ status == "In Stock" ? "item__status-green" : "item__status-red"}>{status}</h4>
        </div>

        <div className="item__group">
          <h4> QTY</h4>
          <p> {quantity}</p>
        </div>
      </div>

      </div>

      <div className="item__section">
        <div className="item__group item__group-buttons">
          <button className="item__group-buttons--delete"></button>
          <button className="item__group-buttons--edit"></button>
        </div>
      </div>
    </section>
  );
}

export default warehouseInventory;
