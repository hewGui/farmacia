import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <p className="footer-text">DrogaMais | Copyright:</p>
                    <p className="footer-text">Acesse nossas redes sociais</p>
                    <div className="footer-icons">
                        <LinkedinLogo size={48} weight="bold" />
                        <InstagramLogo size={48} weight="bold" />
                        <FacebookLogo size={48} weight="bold" />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
