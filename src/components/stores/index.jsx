import React from 'react';
import './styles.scss';
import { AppContext } from '../../App';
import { getStores } from '../../services/stores';

export function Stores() {

    const { setTitle } = React.useContext(AppContext);
    const [stores, setStores] = React.useState([]);
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);
  
    React.useEffect(() => {
      (async () => setStores(await getStores()))();
    }, []);

    return <div className="stores">
        <div className="stores-wrapper">
            {stores.map(({
                id_store,
                name,
                description,
                image,
              }) => 
              <div key={id_store}>
                  <figure>
                      <img src={image} alt={name} />
                  </figure>
                  <div>
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p className="avaliacoes">
                            <img src="/images/stars.png" alt="Avaliações"/>
                            <span>10 Avaliações</span>
                        </p>
                        <p className="mandar-mensagem">
                            <img src="/images/manfar-mensagem.png" alt="Mandar mensagem"/>
                            <span>Mandar mensagem</span>
                        </p>
                    </div>
                  </div>
              </div>
              )}
        </div>
    </div>
}