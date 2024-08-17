import React from 'react';
import { Categoria } from '../../../models/Categoria';
import './CardCategorias.css'

// Tipagem das props do componente
const CardCategoria: React.FC<{ categoria: Categoria }> = ({ categoria }) => (
    <div className="card"> 
        <h2>{categoria.nomeDesc}</h2>
    </div>
);

export default CardCategoria;
