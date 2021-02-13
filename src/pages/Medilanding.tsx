import React from 'react';

import '../styles/landing2.css';

import illustration from '../images/illustracao.svg'


function Medilanding(){
  return (
   <div id="page-medilanding">
     <div className="content-wrapper">
       <header>
         <li>logo</li>
         <ul>
           <li>Home</li>
           <li>Sobre</li>
           <li>Blog</li>
           <li>Contato</li>
         </ul>
         <ul>
           <li>Sign In</li>
           <li>Sign Up</li>
         </ul>
       </header>
        
       <div className="text">
          <main>
            <h1>Seja produtivo enquanto trabalha remotamente</h1>
            <p>A chave para o sucesso do home office é criar
              um ambiente que te permite focar nos objetivos
            </p>
            <div className="button">Saiba mais</div>
          </main>
       </div>

       <div className="illustration">
         <img src={illustration} alt="illustration"></img>
       </div>
       </div>

     </div>
  );
}

export default Medilanding;