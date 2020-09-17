import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProductItem from './components/ProductItem';
import Home from './components/Home';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const items = [
    {key:1, name: 'EQUIPAMIENTO', active: 'Equipamientos para todas las pickup y 4X4 del mercado nacional, barras protectoras, enganches, estribos, cobertores, lonas, faros led, deflectores de aire, cubre carter, etc.', src: 'http://www.topdrive.com.ar/media/slider/1.jpg' },
    {key:2, name: 'Burletes', active: 'Burletes para Industria y Automotor. Línea completa de burletes para la industria de refrigeración, alimentos, metalmecánica, naval y químicos. Línea completa de burletes, colisas y mangueras para autos y pickup.', src: 'http://www.topdrive.com.ar/media/slider/2.jpg' },
    {key:3, name: 'Motos', active: 'Línea completa en cubiertas, cámaras, cadenas, baterías y bujías. Comercializamos cubiertas Rinaldi y Vee Rubber, cámaras Yoshimoto y Kenda, cadenas DID y Okinoi, baterías Maxium y bujías Champion y NGK.', src: 'http://www.topdrive.com.ar/media/slider/3.jpg' },
    {key:4, name: 'Bosque & Jardin', active: 'Maquinas cortadoras a explosión en 18", 20" con motor Briggs & Stratton ,obturadores Slime y Oko Open, bidones Scepter y Soch, bujías Champion y NGK, Cuchillas y filtros para cortadoras y mini tractores.', src: 'http://www.topdrive.com.ar/media/slider/4.jpg' }
  ];

  const products = [
      {key:1, name: 'BUJIA 2021',brand: 'NGK' , desc: '100% MADE IN JAPAN LO MAS AVANZADO A NIVEL MUNDIAL EN BUJIAS DE ALTA PERFORMANCE SUPERIORES A PLATINO.', src: 'http://www.topdrive.com.ar/media/repuesto/bujias/1.jpg', stock:8 ,initialCount:1},
      {key:2, name: 'BUJIA 2022',brand: 'NGK' , desc: '100% MADE IN JAPAN LO MAS AVANZADO A NIVEL MUNDIAL EN BUJIAS DE ALTA PERFORMANCE SUPERIORES A PLATINO.', src: 'http://www.topdrive.com.ar/media/repuesto/bujias/2.jpg', stock:12 ,initialCount:2},
      {key:3, name: 'BUJIA 2023',brand: 'NGK' , desc: '100% MADE IN JAPAN LO MAS AVANZADO A NIVEL MUNDIAL EN BUJIAS DE ALTA PERFORMANCE SUPERIORES A PLATINO.', src: 'http://www.topdrive.com.ar/media/repuesto/bujias/3.jpg', stock:23 ,initialCount:3},
      {key:4, name: 'BUJIA 2025',brand: 'NGK' , desc: '100% MADE IN JAPAN LO MAS AVANZADO A NIVEL MUNDIAL EN BUJIAS DE ALTA PERFORMANCE SUPERIORES A PLATINO.', src: 'http://www.topdrive.com.ar/media/repuesto/bujias/4.jpg', stock:35 ,initialCount:4},
      {key:5, name: 'BUJIA 2027',brand: 'NGK' , desc: '100% MADE IN JAPAN LO MAS AVANZADO A NIVEL MUNDIAL EN BUJIAS DE ALTA PERFORMANCE SUPERIORES A PLATINO.', src: 'http://www.topdrive.com.ar/media/repuesto/bujias/5.jpg', stock:14,initialCount:5},
      {key:6, name: 'BUJIA 2010',brand: 'NGK' , desc: '100% MADE IN JAPAN LO MAS AVANZADO A NIVEL MUNDIAL EN BUJIAS DE ALTA PERFORMANCE SUPERIORES A PLATINO.', src: 'http://www.topdrive.com.ar/media/repuesto/bujias/5.jpg', stock:24,initialCount:1}
  ];

  return (
    <div className="App">
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <Home items={items} products={products}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;


