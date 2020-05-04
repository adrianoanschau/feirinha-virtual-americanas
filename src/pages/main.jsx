import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './main.scss';
import { AppContext } from '../App';

export function Main() {
    const { setTitle } = React.useContext(AppContext);
    const history = useHistory();

    React.useEffect(() => {
      const localization = localStorage.getItem('localization');
      if (!localization) {
        history.push('/como-funciona');
      }
    }, [])
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);

    return <div className="Main-Page">
        <p className="location">
          Você está na Feirinha do bairro <strong>Morumbi</strong> <Link to="/localizacao">(alterar)</Link>.
        </p>
    </div>
} 