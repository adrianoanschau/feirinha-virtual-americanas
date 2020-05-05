import React from 'react';
import {useParams} from 'react-router-dom';
import {MdAddBox} from 'react-icons/md';
import './styles.scss';
import { AppContext } from '../../App';
import { getProducts } from '../../services/products';
import {priceValue} from '../../utils/price';

export function Products() {

    const { setTitle } = React.useContext(AppContext);
    const [products, setProducts] = React.useState([]);
    const {categoryId} = useParams();
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);
  
    React.useEffect(() => {
      (async () => setProducts(await getProducts(categoryId)))();
    }, [categoryId]);

    return <div className="products">
        <div className="products-wrapper">
            {products.map(({
                id_item,
                name,
                image,
                price,
              }) => 
              <div key={id_item}>
                  <figure>
                      <img src={image} alt={name} />
                      <span className="adicionar">
                          <MdAddBox />
                      </span>
                  </figure>
                  <div>
                    <div>
                        <h4>{name}</h4>
                    </div>
                    <div>
                        <p className="valor-do-produto">
                            <img src="/images/credit-card.png" alt="Valor do Produto"/>
                            <span>{priceValue(price)}</span>
                        </p>
                    </div>
                  </div>
              </div>
              )}
        </div>
    </div>
}