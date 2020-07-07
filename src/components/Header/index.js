import React, { useState } from 'react';
import { Link as GatsbyLink } from "gatsby"
import useTranslations from '../useTranslations';
import {
    Collapse,
    Navbar,
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


const Header = ({locale}) => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslations()

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: 3 }}>
                <NavbarBrand href={locale === 'en' ? '/' : locale }><img src={logo} alt="Logo" style={{ width: 55 }} /></NavbarBrand>
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
                                    <GatsbyLink to="/" hrefLang="en">
                                        <img src={USA} style={{ width: 30 }} /><span className="pl-2">Estados Unidos / Ingles</span>
                                    </GatsbyLink>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink to="/es" hrefLang="es">
                                        <img src={USA} style={{ width: 30 }} /><span className="pl-2">Chile / Español</span>
                                    </GatsbyLink>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink to="/pt" hrefLang="pt">
                                        <img src={USA} style={{ width: 30 }} /><span className="pl-2">Portugues / Brasil</span>
                                    </GatsbyLink>
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
