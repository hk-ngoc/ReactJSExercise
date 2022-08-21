import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    /*Function for drop down menu*/
        toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            /*Short form of React fragment, long form is <React.fragment>*/
            <React.Fragment>   
                <Navbar dark expand="md" >
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="Ristorante de Confusion" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/nhanvien">
                                        <span className="fa fa-home fa-lg"></span>NHÂN VIÊN
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/phongban">
                                        <span className="fa fa-info fa-lg"></span>PHÒNG BAN
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/bangluong">
                                        <span className="fa fa-list fa-lg"></span>BẢNG LƯƠNG
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className="row row-header">
                            <div className="col-12 col-sm-8">
                                <h1> PHẦN MỀM QUẢN LÝ NHÂN VIÊN 1.01 </h1>
                                <p>Keep your employees just several clicks away</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;