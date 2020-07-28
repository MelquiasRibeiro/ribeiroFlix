import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <HeaderMenu />
            <Routes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
