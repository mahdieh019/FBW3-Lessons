import React, { Component } from 'react'
import { NavLink as RLink } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem


} from 'reactstrap'
export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="danger" light expand="md">
                    <NavbarBrand href="/" >Reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink exact activeClassName="active" tag={RLink} to="/"> Home </NavLink>

                            </NavItem>

                            <NavItem>
                                <NavLink tag={RLink} to="/about"> About </NavLink>

                            </NavItem>

                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                       Options 
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                            <DropdownItem>
                                               <NavLink tag={RLink} to="/option1"> Option1 </NavLink>
                                            </DropdownItem>
                                            <DropdownItem >
                                                <NavLink tag={RLink} to="/option2"> Option2 </NavLink>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                Reset
                                            </DropdownItem>
                                    </DropdownMenu>
                                    
                                </UncontrolledDropdown>
                            </NavItem>
                        
                        
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
