import React, { useState } from 'react';
import harta from '../../../assets/images/harta.jpg'
import border from '../../../assets/images/border.jpg'
import './Acasa.scss';

function Acasa() {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className='acasa'>
            <h2>
                Harta Turistica A României
            </h2>
            <div className="imagini">
                <img src={border} className='border' />
                <img src={harta} className={`harta ${isZoomed ? 'zoomed' : ''}`}
                    onClick={handleImageClick} />
                <img src={border} className='border' />
            </div>
        </div>
    )
}

export default Acasa