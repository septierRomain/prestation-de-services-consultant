import React from 'react';
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import Arrow from '../../Assets/arrow.svg'

import Banner from '../App/Banner';
import ModalAssujetti from '../Modal/assujetti';
import ModalElectronic from '../Modal/electronic';
import ModalAds from '../Modal/publicité';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour les prestations de services pour les consultants</h1>
        <p>Vous êtes consultant et réalisez des prestations de conseil dans les domaines suivants (liste non exhaustive) :</p>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Informatique et développement</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Marketing, communication et publicité <ModalAds /> </ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Stratégie et gestion d'entreprise</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Gestion des ressources humaines et conseils en recrutement</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Traitement des données et fourniture d’informations</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations des ingénieurs et des bureau d'études</ul>
        <p>A l'exclusion des formations en ligne et des prestations électroniques comme l'hébergement et la fourniture de sites web ainsi que la maintenance de logiciels <ModalElectronic /></p>
        
        <h5>Vos prestations ne s'inscrivent pas dans le cadre de celles mentionnées précédemment ? Retrouvez parmi nos simulateurs, celui correspondant à votre activité : <a href="https://simulateur-prestations-services.netlify.app/">C'est par ici !</a></h5>
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ? <ModalAssujetti /></h2>
        <div className="select_container">
          <Link to='Assujetti' ><button className='select'>Oui</button></Link>
          <Link to='non_assujetti' ><button className='select'>Non</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home