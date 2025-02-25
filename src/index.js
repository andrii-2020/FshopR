import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoMatch from './page/NoMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = lazy(() => import('./App'));
const Productlist = lazy(() => import('./page/ProductList'));
const Productpage = lazy(() => import('./page/ProductPage'));
const Formsadd = lazy(() => import('./page/ui/FormsAdd'));



root.render(
    <Suspense fallback={<NoMatch />}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index  element={<Home />} />
                    <Route path="/products/category/:id"  element={<Productlist/>}/>
                    <Route path="/products/:id"  element={<Productpage/>}/>
                    <Route path="/form"  element={<Formsadd/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>
);

