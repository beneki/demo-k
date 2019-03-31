import React from 'react';
import { history } from '../../helpers';
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
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button } from 'reactstrap';
import { userActions } from '../../actions';
import './../../assets/style/components/header.less';

class Header extends React.Component {
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
  renderMenu(menuItems) {
    return menuItems.map((itm, ix) => <NavItem key={ix}> <NavLink href="#">{itm}</NavLink> </NavItem>);
  }
  render() {
      const menu = ["Categories", "Notification", "Login/Sign Up", "Help"]; // I've harcoded menu because I have no data for it
      return (
        <div className="header navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Navbar expand="md">
                <NavbarBrand href="/">
                    <div className="logo">
                        <h1>eazy</h1>
                        <span>.my</span>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {this.renderMenu(menu)}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
      );
  }
}

export { Header };