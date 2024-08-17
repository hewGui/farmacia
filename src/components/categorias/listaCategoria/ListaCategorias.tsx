// src/components/categorias/ListarCategorias.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Categoria } from '../../../models/Categoria';
import { deletar } from '../../../services/Services'
import CardCategoria from '../cardCategorias/CardCategorias';
import './ListaCategorias.css';
import axios from 'axios';

const ListarCategorias: React.FC = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('/categorias')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setCategorias(response.data);
                } else {
                    console.error('Dados recebidos não são um array', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao carregar categorias', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deletar(`/categorias/${id}`, {});
            setCategorias(categorias.filter(categoria => categoria.id !== id));
        } catch (error) {
            console.error('Erro ao excluir categoria', error);
        }
    };

    if (loading) return <p>Carregando...</p>;

    return (
        <div className="container">
            <h1>Listar Categorias</h1>
            <Link to="/cadastroCategoria">Criar Nova Categoria</Link>
            {categorias.length > 0 ? (
                categorias.map(categoria => (
                    <div key={categoria.id} className="categoria-item">
                        <CardCategoria categoria={categoria} />
                        <div className="categoria-actions">
                            <Link to={`/categorias/${categoria.id}`}>Editar Categoria</Link>
                            <Link to={`/produtos?categoria=${categoria.id}`}>Ver Produtos</Link>
                            <button onClick={() => handleDelete(categoria.id)}>Excluir</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nenhuma categoria encontrada.</p>
            )}
        </div>
    );
};

export default ListarCategorias;
