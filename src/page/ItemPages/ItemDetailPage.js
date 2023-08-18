import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ItemDetailPage.scss";

function ItemDetailPage() {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getItem = (itemId) => {
    axios
      .get(`http://localhost:8080/api/inventories/${itemId}`)
      .then((response) => {
        setItem(response.data[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getItem(itemId);
  }, [itemId]);

  const page = "itemDetailPage";

  if (isLoading) {
    return;
  }

  return (
    <main className={`${page}`}>
      <div>
        <h1 className={`${page}__title`}>{`${item.item_name}`}</h1>
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
