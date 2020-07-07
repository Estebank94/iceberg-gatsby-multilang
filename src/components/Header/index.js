import React, { useState } from 'react';
import useTranslations from '../useTranslations';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import logo from '../../images/logo-notco-black.svg';
import USA from '../../images/flags/usa-flag.png'

import * as S from './styled';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslations()

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: 3 }}>
                <NavbarBrand href="/"><img src={logo} alt="Logo" style={{ width: 55 }} /></NavbarBrand>
                <div id="nav-icon" onClick={toggle} className={isOpen ? 'open d-md-none' : 'd-md-none'}>
                    <span></span>
                    <span></span>
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className="nav-link item-menu pr-5">NOTCO1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="nav-link item-menu pr-5">NOTCO2</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="nav-link item-menu pr-5">NOT<span className="azul">MILK</span></NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="desplegable-header">
                            <DropdownToggle nav caret>
                                <img src={USA} style={{ width: 30 }} />
                            </DropdownToggle>
                            <DropdownMenu right className="p-2">
                                <DropdownItem className="nav-link item-menu">
                                    <img src={USA} style={{ width: 30 }} /><span className="pl-2">Estados Unidos / Ingles</span>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <img src={USA} style={{ width: 30 }} /><span className="pl-2">Chile / Español</span>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <img src={USA} style={{ width: 30 }} /><span className="pl-2">Portugues / Brasil</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
