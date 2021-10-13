import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const NonAssujetti = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/'>
        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
        </div>

      <h4>S'agit il d'une des prestations suivantes ?</h4>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les locations de moyens de transport (de tous types de moyens maritime, terrestre...) de courte durée lorsque le moyen de transport est mis à disposition du preneur en France.<br />(exemple: le véhicule de location est récupéré en France)</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations de services se rattachant à un bien immeuble situé en France</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les locations de biens meubles corporels autres que les moyens de transport, lorsqu’ils sont utilisés en France</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations de transport de passagers situées en France.</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les ventes à consommer sur place lorsqu’elles sont matériellement exécutées en France</ul>

        <div className="select_container">
          <Link to='/France_non_soumis'><button className='select'>Oui</button></Link>
          <Link to='/prestation_electronique'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default NonAssujetti;