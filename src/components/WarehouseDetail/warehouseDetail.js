import "./warehouseDetail.scss";

function warehouseDetail({name, address, position, phone, email}) {
  return (
    <section>
      <div>
        <h3> Warehouse Detail</h3>
        <p> {address}</p>
      </div>

      <div>
        <div>
          <h3>Contact Name</h3>
          <p>{name}</p>
          <p>{position}</p>
        </div>

        <div>
          <h3> Contact Information</h3>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </section>
  );
}

export default warehouseDetail;
