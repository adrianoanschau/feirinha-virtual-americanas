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
      <form name="contact" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}