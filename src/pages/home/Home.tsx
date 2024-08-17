import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2 className="home-title">Boas Vindas!</h2>
                <p className="home-subtitle">Compromisso em cuidar da sua saúde e bem-estar</p>
                <div className="home-buttons">
                    <button className="home-button">Nossos Produtos</button>
                </div>
            </div>
        </div>
    );
}

export default Home;