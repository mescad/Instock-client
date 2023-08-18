import "./warehouseDetail.scss";
import { Link } from "react-router-dom";
import editImage from "../../asset/Icons/edit-24px-white.svg"
import backImage from "../../asset/Icons/arrow_back-24px.svg"
import ButtonEditTablet from "../ButtonEditTablet/buttonEditTablet";

function warehouseDetail({id, city, country, name, address, position, phone, email, warehouseName }) {
  return (
    <section className="details">


      <section className="details__top">

        <div className="details__leftgroup"> 
        <Link to={'/warehouses'}> 
        <button className="details__button-back"><img alt="back_page" src={backImage}/> </button>
        </Link>
        <h1>{warehouseName}</h1>
        </div>
        <Link to={`/warehouses/${id}/edit`}> 
        <button className="details__button-edit">
          <img alt="edit_warehouse" src={editImage}/>
        </button>
        <ButtonEditTablet/></Link>
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
