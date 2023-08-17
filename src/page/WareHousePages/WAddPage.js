import './WAddPage.scss';

import EditWarehouse from '../../components/EditWareshouse/EditWarehouse.js';

function WAddPage() {
  const handleForm = () => {

  }

  return (
    <main className='add-new-warehouse'>
      <h1 className='add-new-warehouse__title'>Add New Warehouse</h1>
      <section>
      <EditWarehouse buttonText={`+ Add Warehouse`} page={`add-new-warehouse`} handleForm={handleForm}/>
      </section>
    </main>
  );
}

export default WAddPage;
