import React from 'react';
import './feirinha-local.scss';
import { AppContext } from '../App';
import { getCategories } from '../services/categories';

export function FeirinhaLocal() {

  const { setTitle } = React.useContext(AppContext);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    setTitle('feirinha local');
  }, [setTitle]);

  React.useEffect(() => {
    (async () => setCategories(await getCategories()))();
  }, [setCategories]);

  return (
    <div className="FeirinhaLocal-Page">
      <div>
        <h2>Produtos fresquinhos entregues em até 2 horas</h2>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div>
      <br/>
      <div className="categories">
        {categories.map(({
          id_category,
          name,
          image,
          description
        }) => 
          <div key={id_category}>
            <figure>
              <img src={image} alt={name} />
            </figure>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}