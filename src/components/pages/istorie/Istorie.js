import React from 'react';
import './istorie.scss';
import Card from '../../card/Card';
import statuete from '../../../assets/images/statuete.jpg';
import sarmizegetusa from '../../../assets/images/sarmizegetusa.jpg';
import roma from '../../../assets/images/roma.png';
import steagDacic from '../../../assets/images/steagDacic.png';
import steagRoman from '../../../assets/images/steagRoman.png';

function Istorie() {
  return (
    <div className='istorie'>
      <div className='title'>
        <img src={steagDacic} />
        <h1>Istoria României</h1>
        <img src={steagRoman} />
      </div>
      <div className='card-container'>
        <Card title='Preistorie și antichitate' image={statuete} description='Teritoriul de astăzi al României a fost locuit începând cu circa acum 40.000 de ani, 
        în paleoliticul superior, când popoarele aparținând culturii arheologice aurignaciene au sosit în estul Europei din Orientul Apropiat:
        în Peștera cu Oase din zona Anina au fost găsite astfel unele dintre cele mai vechi rămășițe ale oamenilor moderni găsite în Europa. 
        Fosilele, provenind de la trei indivizi, au fost datate la o vechime de 35.000 de ani, sau 40.500 folosind date calibrate.
        Epoca pietrei este reprezentată prin descoperiri arheologice pe tot cuprinsul țării. 
        În neolitic, pe teritoriul țării era răspândită cultura Cucuteni, o civilizație care a reprezentat apogeul popoarelor ce trăiau înainte de venirea triburilor indo-europene.
        Peste triburile de agricultori sedentari de la sfârșitul neoliticului, au venit triburi de păstori din stepele nord-pontice, care sunt presupuse neamuri indo-europene.'>
        </Card>
        <Card title='Dacia' image={sarmizegetusa} description='Încă înainte de anul 2.000 î.Hr. și până în secolul I î.Hr.,
        pe teritoriul României de astăzi, pe atunci Dacia, sunt evidențiate de izvoarele arheologice și istorice diferite uniuni de triburi tracice,
        daco-getice, mai importante fiind cele de sub conducerea Regelui Charnabon (sfârșitul sec. VI î.Hr. - începutul sec. V î.Hr.), 
        a Regelui Dromichaites (sfârșitul sec.IV î.Hr. - începutul sec. III î.Hr.), precum și a regilor Oroles și Rubobostes (prima jumătate a sec. II î.Hr.).
        Daco-geții erau caracterizați de către istoricul Herodot drept „cei mai viteji și mai drepți dintre traci".
        În secolul I î.Hr., sub stăpânirea Regelui Burebista (82-44 î.Hr.), s-a format primul stat dac unitar centralizat, cu capitala la Argedava (actuala comună Popești - Nucet, județul Giurgiu),
        cetate situată pe malul drept al râului Argessis (Argeș)
        și amplasată la cca 18–20 km sud-vest de centrul actualei capitale a României, București. Capitala statului dac este menționată de antici drept „Cetatea Soarelui" (Hellis).'>
        </Card>
        <Card title='Romanizarea' image={roma} description='Romanizarea reprezintă un proces istoric complex prin care civilizaţia romană a pătruns în toate compartimentele vieţii unei provincii,
        încât a dus la înlocuirea limbii populaţiei supuse cu limba latină. Factorii romanizării au fost administraţia, armata, veteranii, coloniştii, urbanizarea, religia,
        dreptul şi învăţământul în limba latină. Impactul asupra autohtonilor al acestor factori a fost asimilarea, în mod conştient, a civilizaţiei romane.
        Istoricul Lucien Musset a scris că latinitatea Europei centrale din Suabia până în Transilvania ar trebui să fie privită ca un întreg; părţile occidentale au fost germanizate,
        cele din mijloc maghiarizate şi numai cele din est şi sud (România) şi-au menţinut latinitatea'>
        </Card>
      </div>
      <div className='bottom-container'>
        <h2>Naşterea României ca naţiune</h2>
        <p>Ca în multe alte ţări europene, în anul 1848 s-a produs în Moldova, Ţara Românească şi Transilvania o renaştere culturală cunoscută ca „Renaşterea naţională a României”. Ţelurile revoluţionarilor - independenţa completă pentru primele două şi emanciparea naţională pentru cel de-al treilea principat românesc - au rămas neîmplinite, dar au pus bazele evoluţiilor următoare. De asemenea, acţiunea educativă a revoluţionarilor („deşteptătorii neamului”, cum li se spunea atunci) a ajutat populaţiile celor trei principate să-şi recunoască unitatea lor de limbă şi să-şi apere intereselor lor.</p>
      </div>
    </div>
  )
}

export default Istorie