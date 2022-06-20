import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProducts } from 'rest/products';

import './styles.scss';

// const HREF = 'https://www.olx.ua/d/obyavlenie/metalloiskatel-pirat-IDNQGhy.html';
export const TitlePage = () => {
  // const [aside, setAside] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then(productsPage => setProducts(productsPage))
  }, [])

  return (
    <main>
      {/* <div className={`aside p-1 ${aside}`}>
        <button className='icon-button mb-1' onClick={() => setAside(!aside)}>
          <i className='fa fa-bars'></i>
        </button>

        <div>
          Сюди якийсь текст. Не знаю який, але сайт пусто виглядає
        </div>
      </div> */}

      <div className='content p-1'>
        <div className='site-info p-1'>
          <h1>
            Металошукачі та комплектуючі до них
            <b> від виробника</b>
          </h1>

          <div className='subtitle-1'>
            Виготовляємо в Україні, відправляємо Новою Поштою де вона наразі доступна.<br/>
            <b>Працюємо під час війни.</b>
          </div>
        </div>

        <div className='product-list p-1'>
          {products
            ? products.map(product =>
                <Link
                  to={`/product/${product.id}`}
                  key={product.title}
                  className='item p-1'>
                  <img
                    src={product.images[0]}
                    alt={product.title} />

                  <div className='subtitle-1 pb-1'>{product.title}</div>
                  <div className='subtitle-2 bold'>{product.price} {product.currency}</div>
                </Link>
              )
            : <div className='flex-center w-100'>
                <i className='fa fa-spinner fa-spin h1'></i>
              </div>
          }
        </div>
      </div>
    </main>
  );
}

export default TitlePage;
