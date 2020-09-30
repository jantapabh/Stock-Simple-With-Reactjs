import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import fire from '../config/fire';
import Login from './Login'
import Home from './Home'
import Stock from './Stock'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';

class Topbar extends Component {

    logout = e => {
        fire.auth().signOut();
    }

    state = {
        current: 'mail',
        visible: false
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        return (
            <div>
                <nav className="menuBar">
                    <div className="logo">
                        <a href="">logo</a>
                    </div>
                    <div className="menuCon">
                        <div className="leftMenu">
                            <LeftMenu />
                        </div>
                        <div className="rightMenu">
                            <RightMenu />
                        </div>
                        <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                            <span className="barsBtn"></span>
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement="left"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <LeftMenu />
                            <RightMenu />
                        </Drawer>

                    </div>
                </nav>
            </div>
        )
    }
}
export default Topbar