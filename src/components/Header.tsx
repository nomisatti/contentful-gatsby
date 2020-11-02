import React, { useState } from 'react'
import { Navbar, Button, Nav, Form, Modal,InputGroup,FormControl } from 'react-bootstrap';
import {Link} from 'gatsby'
//const logo = require('../images/logo.png') ;

export default (props) => {

    const [show, setShow] = useState(false);


    const handleShow = () => setShow(true);


    return (
        <Navbar bg="primary" variant="dark" sticky="top">
            <Link className="navbar-brand" to="/">Blog Site</Link>
            
            <Nav className="ml-auto">
               
            </Nav>
            <Form inline>

                <Button className="ml-auto" variant="outline-info" onClick={handleShow}>Add New Book Mark</Button>
          
            </Form>
        </Navbar>
    )
}