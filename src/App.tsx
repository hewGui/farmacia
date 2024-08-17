import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarCategorias from './components/categorias/listaCategoria/ListaCategorias';
import FormCategoria from './components/categorias/formCategoria/FormCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias/>} />
              <Route path="/cadastroCategoria" element={<FormCategoria/>} />
              <Route path="/categorias/:id" element={<FormCategoria/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;