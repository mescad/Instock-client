import "./warehouseDetail.scss";
import { Link } from "react-router-dom";

function warehouseDetail({ city, country, name, address, position, phone, email, warehouseName }) {
  return (
    <section className="details">


      <section className="details__top">

        <div className="details__leftgroup"> 
        <Link to={'/warehouses'}> 
        <button className="details__button-back"> </button>
        </Link>
        <h1>{warehouseName}</h1>
        </div>

        <button className="details__button-edit">
          <img url="../../asset/Icons/edit-24px.svg"/>
        </button>
      </section>



      <section className="details__bottom">

        <div className="details__section--left">  
        <div className="details__group">
          <h4> WAREHOUSE ADDRESS</h4>
          <p> {address}</p>
          <p>{`${city},${country}`}</p>
        </div>
        </div>

        <div className="details__section--right">
          <div className="details__group details__group-modified">
            <h4 >CONTACT NAME</h4>
            <p>{name}</p>
            <p>{position}</p>
          </div>

          <div className="details__group">
            <h4> CONTACT INFORMATION</h4>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>

      </section>



    </section>
  );
}

export default warehouseDetail;
