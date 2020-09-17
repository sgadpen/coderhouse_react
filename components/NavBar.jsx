import React from "react";
import { Navbar, Form, Nav, Button } from "react-bootstrap";
import SVG from "./CartIcon";
import Category from "./Category";



const NavBar = () => (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href=".">TopDrive</Navbar.Brand>
            <Category name="Equipamiento" items={['Accesorios', 'Barras', 'Bumper', 'Cajones', 'Cobertores', 'Enganches', 'Estribos', 'Faros', 'Fender', 'Lonas', 'Malacates', 'Snorkel']} />
            <Category name="Burletes" items={['Bigomas', 'Colisa', 'Correas', 'Perfiles', 'Planos']} />
            <Category name="Repuestos Motos" items={['Baterías', 'Bujías', 'Cadenas', 'Camaras', 'Cubiertas']} />
            <Category name="Bosque & Jardin" items={['Bidones', 'Bujías', 'Cuchillas', 'Filtros', 'Obturadores', 'Cubiertas Minitractor']} />
          </Nav>
          <Form inline>
            <Button variant="primary"><span>Comprar </span><SVG/></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
export default NavBar;
