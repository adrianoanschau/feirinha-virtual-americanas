import React from 'react';
import './home.scss';
import iphonese from '../assets/banners/iphone-se.png'
import maes from '../assets/banners/maes.png'

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../assets/banners/quick', false, /\.(png|jpe?g|svg)$/));

export function Home() {
  return (
    <div className="Home-Page">
      <div className="quick-access">
        <ul>
          {images.map((image, key) =>
            <li key={key}>
              <img src={image} />
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
          <img src={iphonese} />
        </div>
        <div className="banner">
          <img src={maes} />
        </div>
      </div>
    </div>
  );
}