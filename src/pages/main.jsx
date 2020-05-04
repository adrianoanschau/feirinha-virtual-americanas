import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './main.scss';
import { AppContext } from '../App';
import {Categories} from '../components/categories';
import {Stores} from '../components/stores';

export function Main() {
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

    return <div className="Main-Page">
        <p className="location">
          Você está na Feirinha do bairro <strong>{localization && localization.neighborhood}</strong> <Link to="/localizacao">(alterar)</Link>.
        </p>
        <Categories />
        <div className="banner">
          <figure>
            <img src="/images/banner1.png" alt="Banner - Tenha mais com quem você ama!"/>
          </figure>
        </div>
        <Stores />
    </div>
} 