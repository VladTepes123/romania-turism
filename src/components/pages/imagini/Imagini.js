import React from 'react';
import Footer from '../../footer/Footer';
import Card from '../../card/Card';
import Transfagarasan from '../../../assets/images/transfagarasan.jpg';
import CetateaAlba from '../../../assets/images/cetateaalba.jpg'
import DeltaDunarii from '../../../assets/images/deltadunarii.jpg'
import CimitirulVesel from '../../../assets/images/cimitirulvesel.jpg'
import SalinaTurda from '../../../assets/images/salinaturda.jpg'
import Viscri from '../../../assets/images/viscri.jpg'
import CastelulHuniazilor from '../../../assets/images/castelulhuniazilor.jpg'
import CastelulBran from '../../../assets/images/castelulbran.jpg'
import Sighisoara from '../../../assets/images/sighisoara.jpg'

import './Imagini.scss';

function Imagini() {
  return (
    <div>
      <div className='imagini-container'>
        <h1>Imagini din România</h1>
        <div className='card-container'>
          <div>
            <Card title='Transfagarasan' image={Transfagarasan}></Card>
            <Card title='Cetatea Alba Iulia' image={CetateaAlba}></Card>
            <Card title='Delta Dunării' image={DeltaDunarii}></Card>
          </div>
          <div>
            <Card title='Cimitirul Vesel' image={CimitirulVesel}></Card>
            <Card title='Salina Turda' image={SalinaTurda}></Card>
            <Card title='Viscri' image={Viscri}></Card>
          </div>
          <div>
            <Card title='Castelul Huniazilor' image={CastelulHuniazilor}></Card>
            <Card title='Castelul Bran' image={CastelulBran}></Card>
            <Card title='Sighisoara' image={Sighisoara}></Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Imagini