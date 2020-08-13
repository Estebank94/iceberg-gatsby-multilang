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

    const { language, english, spanish, portuguese } = useTranslations()

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Navbar
                color="light"
                light
                expand="md"
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ zIndex: 3 }}
            >
                <NavbarBrand href={locale === 'en' ? '/' : locale}>
                    <img src={logo} alt="NotCo" style={{ width: 55 }} />
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
                        <NavItem>
                            <NavLink
                                href="https://notco.com"
                                className="nav-link item-menu pr-5 menu-link"
                            >
                                NOTCO.COM
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            nav
                            inNavbar
                        >
                            <DropdownToggle nav caret>
                                <span className="nav-link item-menu menu-link d-inline">
                                    {language}
                                </span>
                            </DropdownToggle>
                            <DropdownMenu right className="p-2">
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink
                                        to="/"
                                        hrefLang="en"
                                        style={{ color: 'black' }}
                                    >
                                        {english}
                                    </GatsbyLink>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink
                                        to="/es"
                                        hrefLang="es"
                                        style={{ color: 'black' }}
                                    >
                                        {spanish}
                                    </GatsbyLink>
                                </DropdownItem>
                                <DropdownItem className="nav-link item-menu">
                                    <GatsbyLink
                                        to="/pt"
                                        hrefLang="pt"
                                        style={{ color: 'black' }}
                                    >
                                        {portuguese}
                                    </GatsbyLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header
