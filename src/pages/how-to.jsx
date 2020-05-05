import React from 'react';
import {Link} from 'react-router-dom';
import './how-to.scss';
import { AppContext } from '../App';

export function HowTo() {
    const { setTitle } = React.useContext(AppContext);
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);

    return <div className="HowTo-Page">
        <Link to="/localizacao">
            <figure>
                <img src="/images/como-funciona.png" alt="Como Funciona a feirinha" />
            </figure>
        </Link>
    </div>
} 