import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import { AppContext } from '../../App';
import { getCategories } from '../../services/categories';

export function Categories() {

    const { setTitle } = React.useContext(AppContext);
    const [categories, setCategories] = React.useState([]);
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);
  
    React.useEffect(() => {
      (async () => setCategories(await getCategories()))();
    }, []);

    return <div className="categories">
        <div className="categories-wrapper" style={{ width: 100 * categories.length }}>
        {categories.map(({
                id_category,
                name,
                image,
              }) => 
              <Link key={id_category} to={`/produtos/${id_category}`}>
                  <figure>
                      <img src={image} alt={name} />
                  </figure>
                  <p>{name.toLowerCase()}</p>
              </Link>
              )}
        </div>
      </div>
}