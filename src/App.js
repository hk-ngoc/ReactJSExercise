import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponents';
import { STAFFS } from './shared/staffs';
/*import { DEPARTMENTS } from './shared/staffs';*/
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffdetail: STAFFS
        }
    }

  render() {
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"> Phần mềm Quản lý Nhân sự v1.0</NavbarBrand>
                </div>
            </Navbar>
            <div><StaffList staffdetail={this.state.staffdetail} /></div>
       
      </div>
    );
  }
}

export default App;