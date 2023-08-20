import { useState, useEffect } from "react";
import axios from "axios";
import "./AddEditWarehouse.scss";
import { useNavigate } from "react-router-dom";
import FormFieldError from "../FormFieldError/FormFieldError";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function EditWarehouse({
  action,
  page,
  buttonText,
  handleForm,
  pageToLoad,
  touch,
}) {
  const navigate = useNavigate();

  

  const inputDefaultValue = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  };
  
  const isEdit = action === "edit";
  const formValidation = {
    warehouse_name: { valid: isEdit, error: "This field is required" },
    address: { valid: isEdit, error: "This field is required" },
    city: { valid: isEdit, error: "This field is required" },
    country: { valid: true, error: "" },
    contact_name: { valid: isEdit, error: "This field is required" },
    contact_position: { valid: isEdit, error: "This field is required" },
    contact_phone: { valid: isEdit, error: "This field is required" },
    contact_email: { valid: isEdit, error: "This field is required" },
  };

  const [inputText, setInputText] = useState({inputDefaultValue})
  const [formValid, setFormValid] = useState(formValidation);

  useEffect(() => {
    if (pageToLoad) {
      axios
        .get(`${DOMAIN}:${PORT}/api/warehouses/${pageToLoad}`)
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
    let { name, value } = e.target;
    let valid = true;
    let error = "";

    if (value === "" || value === undefined) {
      valid = false;
      error = "This field is required";
    }

    setInputText({
      ...inputText,
      [name]: value,
    });
    setFormValid({
      ...formValid,
      [name]: { valid: valid, error: error },
    });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const c = "component";
  return (
    <form
      onSubmit={(e) => {
        handleForm(e, inputText, formValid);
      }}
      className={`${page}__form `}
    >
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
          <FormFieldError
            fieldName="warehouse_name"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="address"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="city"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="country"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="contact_name"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="contact_position"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="contact_phone"
            formValidation={formValid}
            touch={touch}
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
          <FormFieldError
            fieldName="contact_email"
            formValidation={formValid}
            touch={touch}
          />
        </article>
      </section>
      <section className={`${c}__button-wrapper`}>
        <button
          className={`${page}__button ${c}__button--cancel`}
          onClick={handleCancel}
        >
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
