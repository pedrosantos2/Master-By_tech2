import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/Nav';
import Featured from './components/Featured';
import Cta from './components/Cta';
import Tesmonials from './components/Testemonials';
import Form from './components/Form';
import Footer from './components/Footer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <NavBar />
    <App />
    <Cta />
    <Featured />
    <Tesmonials />
    <Form />
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
