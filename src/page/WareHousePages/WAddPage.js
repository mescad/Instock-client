import './WAddPage.scss';
import formComponent from '../../components/EditWareshouse/EditWarehouse.js';

function WAddPage() {
  return (
    <>
      <h1>Add New Warehouse</h1>
      <section>
       <formComponent page={`add-new-warehouse`} buttonText={"Save"}/>
      </section>
    </>
  );
}

export default WAddPage;
