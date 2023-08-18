import './ItemAddPage.scss';
import arrowBack from '../../asset/Icons/arrow_back-24px.svg';
import axios from 'axios';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function AddInventoryItem() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (
      !form.itemName.value ||
      !form.category.value ||
      !form.description.value ||
      !form.warehouseId.value
    ) {
      return;
    }

    if (form.status.value === 'In Stock' && !form.quantity.value) {
      return;
    }

    const newItem = {
      item_name: form.itemName.value,
      category: form.category.value,
      description: form.description.value,
      status: form.status.value,
      quantity: parseInt(form.quantity.value),
      warehouse_id: parseInt(form.warehouseId.value)
    };

    console.log(newItem);

    axios
      .post(`${DOMAIN}:${PORT}/api/inventories`, newItem)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function resetFormInput(e) {
    e.preventDefault();
  }
  return (
    <section className="section">
      <div className="section-title-wrapper">
        <img className="arrow" src={arrowBack} alt="arrow pointing back" />
        <h1 className="section-title-wrapper__title">Add New Inventory Item</h1>
      </div>
      <div className="form-wrapper">
        <form
          className="form"
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <div className="another-wrapper">
            <div className="wrapper wrapper--border">
              <h2 className="form__title">Item Details</h2>
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
                <select name="category" className="input input--select">
                  <option value={null}>Please select</option>
                  <option value={'Accessories'}>Accessories</option>
                  <option value={'Apparel'}>Apparel</option>
                  <option value={'Electronics'}>Electronics</option>
                  <option value={'Gear'}>Gear</option>
                  <option value={'Health'}>Health</option>
                </select>
              </label>
            </div>
            <div className="wrapper">
              <h2 className="form__title">Item Availability</h2>

              <h3 className="wrapper__second-title">Status</h3>
              <div className="wrapper-to-flex">
                <label>
                  <input type="radio" name="status" value={'In Stock'} />
                  In stock
                </label>
                <label>
                  <input type="radio" name="status" value={'Out of Stock'} />
                  Out of stock
                </label>
              </div>

              <div className="display-only-if-in-stock">
                <label>
                  Quantity
                  <input
                    name="quantity"
                    type="number"
                    className="input input--quantity"
                    placeholder="0"
                  />
                </label>
              </div>
              <label>
                Warehouse
                <select name="warehouseId" className="input input--select">
                  <option value={null}>Please select</option>
                  <option value={1}>Manhattan</option>
                  <option value={2}>Washington</option>
                  <option value={3}>Jersey</option>
                  <option value={4}>SF</option>
                  <option value={5}>Santa Monica</option>
                  <option value={6}>Seattle</option>
                  <option value={7}>Miami</option>
                  <option value={8}>Boston</option>
                </select>
              </label>
            </div>
          </div>
          <div className="button-wrapper">
            <button
              onClick={e => {
                resetFormInput(e);
              }}
              className="button"
            >
              Cancel
            </button>
            <button type="submit" className="button button--blue">
              + Add Item
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddInventoryItem;
