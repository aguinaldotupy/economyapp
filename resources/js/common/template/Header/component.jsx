import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import style from './style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className={`${style.header}`}>
            <div className="content">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Economy <i className="fas fa-dollar-sign"></i> App </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <NavLink href="/dashboard" className="link">Dashboard</NavLink>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <NavLink href="/billingCycle" className="link">Ciclo de pagamentos</NavLink>
                        </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="link">Cadastro</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Ciclo de pagamentos</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="link">Finanças</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Receita</DropdownItem>
                                    <DropdownItem>Despesas</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="https://github.com/aguinaldotupy/economyapp" className="link">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
            </div>
        );
    }
}
