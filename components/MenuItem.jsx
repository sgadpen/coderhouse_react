import React from 'react';
import { NavDropdown } from 'react-bootstrap';
const MenuItem = ({
    name = "",
}) => (
        <NavDropdown.Item href={name}> {name}</NavDropdown.Item>
    );
export default MenuItem;