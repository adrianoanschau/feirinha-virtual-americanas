import React from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import './store.scss';
import { AppContext } from '../App';
import {Categories} from '../components/categories';
import {Products} from '../components/products';
import {getStore} from '../services/stores';

export function StorePage() {
    const { setTitle } = React.useContext(AppContext);
    const {storeId} = useParams();
    const [store, setStore] = React.useState();
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

  
    React.useEffect(() => {
        (async () => setStore(await getStore(storeId)))();
      }, []);

    return <div className="Store-Page">
        <p className="location">
          Você está na Feirinha do bairro <strong>{localization && localization.neighborhood}</strong> <Link to="/localizacao">(alterar)</Link>.
        </p>
        {!!store &&
        <div className="store-details">
            <figure>
                <img src={store.image} alt=""/>
            </figure>
            <div>
                <h3>{store.name}</h3>
                <p>{store.street}, {store.number}</p>
                <br/>
                <p className="mandar-mensagem">
                    <img src="/images/manfar-mensagem.png" alt="Mandar mensagem"/>
                    <span>Mandar mensagem</span>
                </p>
                <br/>
                <p>{store.description}</p>
            </div>
        </div>}
        <Categories />
        <Products grid />
    </div>
} 