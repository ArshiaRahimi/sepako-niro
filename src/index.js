import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import Navbar from './navbar/navbar';
import Footer from './footer/footer'
import Partners from './partners/partners';
import Intro from './intro/intro';
import Offerings from './offerings/offerings';
import './index.css';

const projectStructure = (
    <div className='mainPage'>
        <div className='contents'>
            <Header />
            <Navbar />
            <Intro />
            <Offerings/>
            <Partners />
            <Footer />
        </div>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(projectStructure); 