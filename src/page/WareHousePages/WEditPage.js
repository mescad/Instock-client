import './WEditPage.scss';
import EditWarehouse from '../../components/EditWareshouse/EditWarehouse.js';

function WEditPage() {
  return (
    <main className='edit-warehouse'>
        <h1 className='edit-warehouse__title'>Edit Warehouse</h1>
        <section className='edit-warehouse__section'>
        <EditWarehouse page={`edit-warehouse`} buttonText={"Save"}/>
        </section>
    </main>
  );
}

export default WEditPage;
