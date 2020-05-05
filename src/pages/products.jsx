import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './products.scss';
import { AppContext } from '../App';
import {Categories} from '../components/categories';
import {Products} from '../components/products';

export function ProductsPage() {
    const { setTitle } = React.useContext(AppContext);
    const history = useHistory();
    const [localization, setLocalization] = React.useState();

    React.useEffect(() => {
      const localization = localStorage.getItem('localization');
      if (!localization) {
        history.push('/como-funciona');
      } else {
        setLocalization(JSON.parse(localization));
      }
    }, [history])
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);

    return <div className="Products-Page">
        <p className="location">
          Você está na Feirinha do bairro <strong>{localization && localization.neighborhood}</strong> <Link to="/localizacao">(alterar)</Link>.
        </p>
        <Categories />
        <Products />
    </div>
} 