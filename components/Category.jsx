import React from "react";
import MenuItem from './MenuItem';
import { NavDropdown } from 'react-bootstrap';


const Caterory = ({
  name = "",
  items = [],
}) => (
    <NavDropdown title={name} id="basic-nav-dropdown">
      {items.map((item) => {
        return <MenuItem name={item} key={item} />
      })
      }
    </NavDropdown>
  );
export default Caterory;