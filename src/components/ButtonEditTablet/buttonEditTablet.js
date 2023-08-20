import editImage from "../../asset/Icons/edit-24px-white.svg";
import "./buttonEditTablet.scss";

function ButtonEditTablet() {
  return (
    <button className="details__button-edit-tablet">
      <img alt="edit_warehouse" src={editImage} />
      Edit
    </button>
  );
}

export default ButtonEditTablet;
