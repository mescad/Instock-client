import './ItemAddPage.scss';
import arrowBack from '../../asset/Icons/arrow_back-24px.svg';

function addInventoryItem() {
  return (
    <section className="section">
      <div className="section-title-wrapper">
        <img src={arrowBack} alt="arrow pointing back" />
        <h1 className="section-title-wrapper__title">Add New Inventory Item</h1>
      </div>
      <div className="form wrapper">
        <form>
          <div className="wrapper">
            <h3 className="form__title">Item Details</h3>
            <label>
              Item Name
              <input
                className="input "
                name="itemName"
                placeholder="Item Name"
              />
            </label>
            <label>
              Description
              <textarea
                className="input text-area"
                name="description"
                placeholder="Please enter a brief item description"
              />
            </label>
            <label>
              Category
              <select name="category" className="input">
                <option>Please select</option>
                <option>Accessories</option>
                <option>Apparel</option>
                <option>Electronics</option>
                <option>Gear</option>
                <option>Health</option>
              </select>
            </label>
          </div>
          <div className="wrapper">
            <h3 className="form__title">Item Availability</h3>

            <h4>Status</h4>
            <div className="wrapper-to-flex">
              <label>
                <input type="radio" />
                In stock
              </label>
              <label>
                <input type="radio" />
                Out of stock
              </label>
            </div>

            <div className="display-only-if-in-stock">
              <label>
                Quantity
                <input type="number" className="input" />
              </label>
            </div>
            <label>
              Warehouse
              <select className="input">
                <option>Please select</option>
                <option>Manhattan</option>
                <option>Washington</option>
                <option>Jersey</option>
                <option>SF</option>
                <option>Santa Monica</option>
                <option>Seattle</option>
                <option>Miami</option>
                <option>Boston</option>
              </select>
            </label>
          </div>
          <div className="button-wrapper">
            <button className="button">Cancel</button>
            <button className="button button--blue">+ Add Item</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default addInventoryItem;
