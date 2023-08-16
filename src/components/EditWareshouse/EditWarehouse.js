import "./EditWarehouse.scss";

function EditWarehouse({ page, buttonText }) {
  return (
    <form className={`${page}__form`}>
      <section>
        <article className={`${page}__article`}>
          <h2 className={`${page}__subtitle`}>Warehouse Details</h2>

          <label className={`${page}__label`} htmlFor="warehouse_name">
            Warehouse Name
          </label>
          <input
            className={`${page}__input`}
            name="warehouse_name"
            type="text"
          />
          <label className={`${page}__label`}>Street Address</label>
          <input name="address" type="text" className={`${page}__input`} />
          <label className={`${page}__label`} htmlFor="city">
            City
          </label>
          <input type="text" name="city" className={`${page}__input`} />
          <label className={`${page}__label`} htmlFor="country">
            Country
          </label>
          <input type="text" name="country" className={`${page}__input`} />
        </article>
        <article className={`${page}__article`}>
          <h2 className={`${page}__subtitle`}>Contact Details</h2>

          <label className={`${page}__label`} htmlFor="">
            Contact Name
          </label>
          <input type="text" name="contact_name" className={`${page}__input`} />
          <label className={`${page}__label`}>Position</label>
          <input
            type="text"
            name="contact_position"
            className={`${page}__input`}
          />
          <label className={`${page}__label`}>Phone Number</label>
          <input
            type="number"
            name="contact_phone"
            className={`${page}__input`}
          />
          <label className={`${page}__label`}>Email</label>
          <input
            type="email"
            name="contact_email"
            className={`${page}__input`}
          />
        </article>
      </section>
      <section className={`${page}__button-wrapper`}>
        <button className={`${page}__button ${page}__button--cancel`}>Cancel</button>
        <button className={`${page}__button ${page}__button--submit`}>{buttonText}</button>
      </section>
    </form>
  );
}

export default EditWarehouse;
