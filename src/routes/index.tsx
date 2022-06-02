import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/home';
import { Produto } from '../pages/produtos';
import { Cliente } from '../pages/cliente';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="produtos" element={<Produto/>}/>
               <Route path="cliente" element={<Cliente/>}/>
               <Route path="*" element={<Navigate to="/" replace />} />
             
            </Routes>
        </BrowserRouter>
    )
}