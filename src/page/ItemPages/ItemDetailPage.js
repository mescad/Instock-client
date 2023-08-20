import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ItemDetailPage.scss";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import ButtonEditTablet from "../../components/ButtonEditTablet/buttonEditTablet";
import { useNavigate } from "react-router-dom";
import ModalNotification from "../../components/ModalNotification/ModalNotification";
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ItemDetailPage({ setNotificationModal }) {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getItem = (itemId) => {
    axios
      .get(`${DOMAIN}:${PORT}/api/inventories/${itemId}`)
      .then((response) => {
        setItem(response.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setNotificationModal([
          <ModalNotification
            modalTitle="Error getting inventory data"
            modalDescription={err.message ? err.message : ""}
            setNotificationModal={setNotificationModal}
          />,
        ]);
      });
  };

  useEffect(() => {
    getItem(itemId);
  }, [itemId]);

  const redirect = () => {
    navigate(`/inventories/${itemId}/edit`);
  };

  const page = "itemDetailPage";

  if (isLoading) {
    return;
  }

  return (
    <main className={`${page}`}>
      <div className={`${page}__wrapper-top`}>
        <ArrowBack />
        <h1 className={`${page}__title`}>{`${item.item_name}`}</h1>

        <button
          onClick={redirect}
          className={`${page}__edit-button-mobile`}
        ></button>
        <button onClick={redirect} className={`${page}__edit-button-tablet`}>
          Edit
        </button>
      </div>
      <section className={`${page}__section`}>
        <article className={`${page}__article-first`}>
          <h4 className={`${page}__subtitle`}>item description</h4>
          <p className={`${page}__paragraph`}>{`${item.description}`}</p>
          <h4 className={`${page}__subtitle`}>category</h4>
          <p className={`${page}__paragraph`}>{`${item.category}`}</p>
        </article>
        <article className={`${page}__article-second`}>
          <div className={`${page}__wrapper-bottom`}>
            <div className={`${page}__wrapper-status`}>
              <h4 className={`${page}__subtitle`}>status</h4>
              <p
                className={
                  item.status == "In Stock"
                    ? `${page}__stock-green`
                    : `${page}__stock-red`
                }
              >{`${item.status}`}</p>
            </div>
            <div className={`${page}__wrapper-quantity`}>
              <h4 className={`${page}__subtitle`}>quantity</h4>
              <p className={`${page}__paragraph`}>{`${item.quantity}`}</p>
            </div>
          </div>
          <h4 className={`${page}__subtitle`}>warehouse</h4>
          <p className={`${page}__paragraph`}>{`${item.warehouse_name}`}</p>
        </article>
      </section>
    </main>
  );
}

export default ItemDetailPage;
