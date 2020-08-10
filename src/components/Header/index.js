import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import useTranslations from '../useTranslations'
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap'

import logo from '../../images/logo-notco-black.svg'

const Header = ({ locale }) => {
    const [isOpen, setIsOpen] = useState(false)

    const { t } = useTranslations()

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar
                color="light"
                light
                expand="md"
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ zIndex: 3 }}
            >
                <NavbarBrand href={locale === 'en' ? '/' : locale}>
                    <img src={logo} alt="Logo" style={{ width: 55 }} />
                </NavbarBrand>
                <div
                    id="nav-icon"
                    onClick={toggle}
                    className={isOpen ? 'open d-md-none' : 'd-md-none'}
                >
                    <span></span>
                    <span></span>
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {/*<NavItem>*/}
                        {/*    <NavLink*/}
                        {/*        href="/"*/}
                        {/*        className="nav-link item-menu pr-5 menu-link"*/}
                        {/*    >*/}
                        {/*        NOT<span className="azul">MILK COFFEE</span>*/}
                        {/*    </NavLink>*/}
                        {/*</NavItem>*/}
                        <NavItem>
                            <NavLink
                                href="/"
                                className="nav-link item-menu pr-5 menu-link"
                            >
                                NOTCO.COM
                            </NavLink>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <NavLink*/}
                        {/*        href="/"*/}
                        {/*        className="nav-link item-menu pr-5 menu-link"*/}
                        {/*    >*/}
                        {/*        NOT<span className="azul">MILK</span>*/}
                        {/*    </NavLink>*/}
                        {/*</NavItem>*/}
                        <UncontrolledDropdown
                            nav
                            inNavbar
                            className="desplegable-header"
                        >
                            <DropdownToggle nav caret>
                                <span className="nav-link item-menu menu-link d-inline">
                                    Idioma
                                </span>
                            </DropdownToggle>
                            <DropdownMenu right className="p-2">
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink
                                        to="/"
                                        hrefLang="en"
                                        style={{ color: 'black' }}
                                    >
                                        Estados Unidos / Ingles
                                    </GatsbyLink>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink
                                        to="/es"
                                        hrefLang="es"
                                        style={{ color: 'black' }}
                                    >
                                        Chile / Español
                                    </GatsbyLink>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink
                                        to="/pt"
                                        hrefLang="pt"
                                        style={{ color: 'black' }}
                                    >
                                        Portugues / Brasil
                                    </GatsbyLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
