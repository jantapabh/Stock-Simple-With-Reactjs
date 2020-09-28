import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import fire from '../config/fire';
import Login from './Login'
import Home from './Home'
import Stock from './Stock'

const Topbar = () => {

const logout = e => {
    fire.auth().signOut();
}

    return (
        <div>
            
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/Home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                 
                    <Nav.Link href="/Stock">Stock</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    <Button variant="warning" style={{ margin: 10 }} onClick={logout}>LOGOUT</Button>
                </Form >
            </Navbar>
        </div>
    )
}
