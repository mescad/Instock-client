import "./warehouseDetail.scss";

function warehouseDetail({ name, address, position, phone, email, warehouseName }) {
  return (
    <section>
      <section className="details__top">
        <div className="details__top-group"> 
        <button className="details__action-back"> </button>
        <h1>{warehouseName}</h1>
        </div>
        <button className="details__action-edit">

          <img url="../../asset/Icons/edit-24px.svg"/>
        </button>
      </section>

      <section className="details__bottom">
        <div className="details__group details__group--top">
          <h4> Warehouse Detail</h4>
          <p> {address}</p>
        </div>
        <div className="details__group details__group--top"></div>

        <div className="details__section">
          <div className="details__group">
            <h4 >Contact Name</h4>
            <p>{name}</p>
            <p>{position}</p>
          </div>

          <div className="details__group">
            <h4> Contact Information</h4>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default warehouseDetail;
