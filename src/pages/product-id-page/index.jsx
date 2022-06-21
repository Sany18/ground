// url: /product/:id
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts } from 'rest/products';

import './styles.scss';

function ProductIdPage() {
  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProducts().then(products => {
      const prod = products.find(p => p.id == id)
      setProduct(prod);
      setActiveImage(prod.images[0]);
      document.title = prod.title;
    })
  }, []);

  const selectImage = imageUrl => () => {
    setActiveImage(imageUrl);
  }

  return (
    <>{ product ?
      <div className='content p-1'>
        <div className='site-info p-1'>
          <h1>{product.title}</h1>
          <div className='h1 bold'>{product.price} {product.currency}</div>
        </div>

        <div className='product flex flex-column-768 pv-1' style={{ gap: '1rem', overflow: 'hidden' }}>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <img
              className='main-image'
              src={activeImage}
              alt={product.title} />

              <div className='flex' style={{ gap: '4px', overflow: 'auto', width: '100%' }}>
                {product.images.map(image => 
                  <div key={image}>
                    <img
                      className={`carousel-image ${activeImage == image ? 'active' : null}`}
                      src={image} alt={image}
                      onClick={selectImage(image)} />
                  </div>
                )}
              </div>
          </div>
          <div className='flex-column' style={{ flex: 1 }}>
            <div className='subtitle-1 bold mb-1'>ОПИС</div>
            <div className="subtitle-2 mb-2">{product.describe}</div>
            
            <table>
              <tbody>
                {product.characteristics.map(char => 
                  <tr key={char[0]}>
                    {char.map(col => <td key={col}>{col}</td>)}
                  </tr>
                )}
              </tbody>
            </table>

            <div className='buy-element subtitle-1 mt-4' style={{ marginLeft: 'auto' }}>
              Купівля \ питання за телефоном: <a href="tel:+380971522468">(+380) 97 152 2468</a>
            </div>
          </div>
        </div>
      </div>
    : null } </>
  );
}

export default ProductIdPage;
