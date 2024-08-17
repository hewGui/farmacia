import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Categoria } from '../../../models/Categoria';

const FormCategoria: React.FC = () => {
    const [nomeDesc, setNomeDesc] = useState('');
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();

    useEffect(() => {
        if (id) {
            // Editar categoria existente
            axios.get(`/categorias/${id}`)
                .then(response => {
                    setNomeDesc(response.data.nomeDesc);
                })
                .catch(error => console.error('Erro ao carregar categoria', error));
        }
    }, [id]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const categoriaData = { nomeDesc };

        if (id) {
            // Atualizar categoria existente
            axios.put(`/categorias`, { ...categoriaData, id: Number(id) })
                .then(() => navigate('/categorias'))
                .catch(error => console.error('Erro ao atualizar categoria', error));
        } else {
            // Criar nova categoria
            axios.post('/categorias', categoriaData)
                .then(() => navigate('/categorias'))
                .catch(error => console.error('Erro ao criar categoria', error));
        }
    };

    return (
        <div>
            <h1>{id ? 'Editar Categoria' : 'Criar Categoria'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nomeDesc">Nome da Categoria:</label>
                    <input
                        type="text"
                        id="nomeDesc"
                        value={nomeDesc}
                        onChange={(e) => setNomeDesc(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default FormCategoria;
