import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>Acest proiect a fost realizat de: Lorena Verde</div>
        <p>Numar de telefon: 0747979018</p>
        <p>Documentatie: <a href='https://ro.wikipedia.org'>Wikipedia</a>,<a href='https://youtube.com'> Youtube</a></p>
      </div>
    </footer>
  );
};

export default Footer;