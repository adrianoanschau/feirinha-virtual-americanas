import React from 'react';
import './home.scss';
import { AppContext } from '../App';
import iphonese from '../assets/banners/iphone-se.png'
import maes from '../assets/banners/maes.png'

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../assets/banners/quick', false, /\.(png|jpe?g|svg)$/));

export function Home() {

  const { setTitle } = React.useContext(AppContext);

  React.useEffect(() => {
    setTitle(null);
  }, [setTitle])

  return (
    <div className="Home-Page">
      <div className="quick-access">
        <ul>
          {images.map((image, key) =>
            <li key={key}>
              <img src={image} alt={image} />
            </li>
          )}
        </ul>
      </div>
      <div className="banners">
        <div className="banner red-box">
          <h2>COVID-19</h2>
          <p>acompanhe aqui nossas ações de combate ao coronavirus</p>
        </div>
        <div className="banner">
          <img src={iphonese} alt="IPhone SE" />
        </div>
        <div className="banner">
          <img src={maes} alt="Dia das Mães" />
        </div>
      </div>
    </div>
  );
}