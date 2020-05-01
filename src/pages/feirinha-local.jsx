import React from 'react';
import './feirinha-local.scss';
import { AppContext } from '../App';
import { getCategories } from '../services/category';

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
      <div>
        {categories.map(category => <p key={category.id_category}>{category.name}</p>)}
      </div>
    </div>
  );
}