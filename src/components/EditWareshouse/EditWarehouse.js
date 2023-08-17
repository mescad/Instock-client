import { useState, useEffect } from "react";
import axios from "axios";
import "./EditWarehouse.scss";

function EditWarehouse({ page, buttonText, handleForm, pageToLoad }) {
  // const [warehouseDetails, setWarehouseDetails] = useState({})
  // const [contactDetails, setContactDetails] = useState({})
 
  const [inputText, setInputText] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  useEffect(() => {
    if (pageToLoad) {
      axios
        .get(`http://localhost:8080/api/warehouses/${pageToLoad}`)
        .then((response) => {
          console.log(response.data);
          setInputText(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!pageToLoad) {
      return;
    }
  }, [pageToLoad]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText({
      ...inputText,
      [e.target.name]: value,
    });
  };

  const c = "component";
  return (
    <form onSubmit={handleForm} className={`${page}__form `}>
      <section> 
        <article className={`${c}__article `}>
          <h2 className={`${c}__subtitle`}>Warehouse Details</h2>

          <label className={`${c}__label`} htmlFor="warehouse_name">
            Warehouse Name
          </label>
          <input
            className={`${c}__input`}
            name="warehouse_name"
            type="text"
            onChange={handleChange}
            value={inputText.warehouse_name}
          />
          <label className={`${c}__label`}>Street Address</label>
          <input
            name="address"
            type="text"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.address}
          />
          <label className={`${c}__label`} htmlFor="city">
            City
          </label>
          <input
            type="text"
            name="city"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.city}
          />
          <label className={`${c}__label`} htmlFor="country">
            Country
          </label>
          <input
            type="text"
            name="country"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.country}
          />
        </article>
        <article className={`${c}__article`}>
          <h2 className={`${c}__subtitle`}>Contact Details</h2>

          <label className={`${c}__label`} htmlFor="">
            Contact Name
          </label>
          <input
            type="text"
            name="contact_name"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_name}
          />
          <label className={`${c}__label`}>Position</label>
          <input
            type="text"
            name="contact_position"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_position}
          />
          <label className={`${c}__label`}>Phone Number</label>
          <input
            type="text"
            name="contact_phone"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_phone}
          />
          <label className={`${c}__label`}>Email</label>
          <input
            type="email"
            name="contact_email"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_email}
          />
        </article>
      </section>
      <section className={`${c}__button-wrapper`}>
        <button className={`${page}__button ${c}__button--cancel`}>
          Cancel
        </button>
        <button
          type="submit"
          className={`${page}__button ${page}__button--submit`}
        >
          {buttonText}
        </button>
      </section>
    </form>
  );
}

export default EditWarehouse;
