import React from 'react';
import '../App.css';

function Portafolio() {

    const products = [
        { id: 1, name: 'Editorial', image: require('../assets/editorialPortafolio.jpg') },
        { id: 2, name: 'Publicomerciales', image: require('../assets/afichePortafolio.jpg') },
        { id: 3, name: 'Packaging', image: require('../assets/packagingPortafolio.jpg') },
        { id: 4, name: 'Corporativa', image: require('../assets/corporativasPortafolio.jpg') },
        { id: 5, name: 'Publicidad Exterior', image: require('../assets/exterioresPortafolio.png') },
        { id: 6, name: 'Material P.O.P', image: require('../assets/popPortafolio.jpg') }
    ];

    return (
        <div className="portafolio">
            <h2>Portafolio</h2>
            <div className="portafolio-grid">
                {products.map(product => (
                    <div key={product.id} className="portafolio-card">
                        <img src={product.image} alt={product.name} className="portafolio-image" />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portafolio;