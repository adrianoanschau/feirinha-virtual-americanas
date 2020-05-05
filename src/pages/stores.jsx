import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './stores.scss';
import { AppContext } from '../App';
import {Categories} from '../components/categories';
import {Stores} from '../components/stores';

export function StoresPage() {
    const { setTitle } = React.useContext(AppContext);
    const history = useHistory();
    const [localization, setLocalization] = React.useState();
    const banner = parseInt(Math.random() * 100) % 2 === 0
      ? <img src="/images/banner1.jpeg" alt="Banner - Tenha mais tempo com quem você ama!"/>
      : <img src="/images/banner2.jpeg" alt="Banner - A entrega dos seus produtos não polui o meio ambiente!"/>

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

    return <div className="Stores-Page">
        <p className="location">
          Você está na Feirinha do bairro <strong>{localization && localization.neighborhood}</strong> <Link to="/localizacao">(alterar)</Link>.
        </p>
        <Categories />
        <div className="banner">
          <figure>
            {banner}
          </figure>
        </div>
        <Stores />
    </div>
} 