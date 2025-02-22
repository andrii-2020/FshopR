import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoMatch from './page/NoMatch';
import ProductList from './page/ProductList';
import ProductPage from './page/ProductPage';
import FormsAdd from './page/ui/FormsAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" index  element={<App />} />
                <Route path="/products/category/:id"  element={<ProductList/>}/>
                <Route path="/products/:id"  element={<ProductPage/>}/>
                <Route path="/form"  element={<FormsAdd/>}/>

                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

