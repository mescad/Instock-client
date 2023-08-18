import { useState, useEffect } from "react";
import axios from "axios";
import "./AddEditWarehouse.scss";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function EditWarehouse({ action, page, buttonText, handleForm, pageToLoad }) {
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
      <section className={`${c}__section-wrapper`}>
        <article className={`${c}__article ${c}__article-1 `}>
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
            placeholder="Warehouse Name"
          />
          <label className={`${c}__label`}>Street Address</label>
          <input
            name="address"
            type="text"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.address}
            placeholder="Street Address"
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
            placeholder="City"
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
            placeholder="Country"
          />
        </article>
        <article className={`${c}__article ${c}__article-2`}>
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
            placeholder="Contact Name"
          />
          <label className={`${c}__label`}>Position</label>
          <input
            type="text"
            name="contact_position"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_position}
            placeholder="Position"
          />
          <label className={`${c}__label`}>Phone Number</label>
          <input
            type="text"
            name="contact_phone"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_phone}
            placeholder="Phone Number"
          />
          <label className={`${c}__label`}>Email</label>
          <input
            type="email"
            name="contact_email"
            className={`${c}__input`}
            onChange={handleChange}
            value={inputText.contact_email}
            placeholder="Email"
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
