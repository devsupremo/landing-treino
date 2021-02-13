import React from 'react';

import '../styles/landing.css';

import {FaHamburger} from 'react-icons/fa';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';


function Landing() {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
    <header>
      <ul>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
       <h3><FaHamburger /> Eatmore</h3>
       <ul>
         <li><FiInstagram size={30} /></li>
         <li><FiTwitter size={30} /></li>
         <li><FiFacebook size={30} /></li>
       </ul>
    </header>
       
       <div className="text">
       <main>
         <h1>Pesquise as melhores hamburguerias de sua cidade</h1>
         <p>Visite as hamburguerias e marque no mapa!</p>
         <div className="button">Ir para o mapa</div>
       </main>
       </div>

       <div className="purplecircle"></div>
       <div className="bluecircle"></div>



       <div className="photo">
       </div>

    </div>
  </div>
  );
}

export default Landing;
