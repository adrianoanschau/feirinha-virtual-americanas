import React from 'react';
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
    }, [setCategories]);

    return <div className="categories">
        <div className="categories-wrapper" style={{ width: 100 * categories.length }}>
        {categories.map(({
                id_category,
                name,
                image,
              }) => 
              <div key={id_category}>
                  <figure>
                      <img src={image} alt={name} />
                  </figure>
                  <p>{name.toLowerCase()}</p>
              </div>
              )}
        </div>
      </div>
}