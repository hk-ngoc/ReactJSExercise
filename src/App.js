import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponents';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"> Phần mềm Quản lý Nhân sự v1.0</NavbarBrand>
                </div>
            </Navbar>
            <div><StaffList/></div>
       
      </div>
    );
  }
}

export default App;