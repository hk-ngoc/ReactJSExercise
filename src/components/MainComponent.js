import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DepartmentList from './DepartmentListComponent';
import SalarySheet from './SalarySheetComponent';
import { STAFFS, DEPARTMENTS, ROLE } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
            role: ROLE,
        };
    }

    render() {
        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/nhanvien' component={() => <StaffList staffs={this.state.staffs} />} />
                    <Route path='/nhanvien/:staffId' component={StaffWithId} />
                    <Route path='/phongban' component={() => <DepartmentList department= { this.state.departments }/>} />
                    <Route path='/bangluong' component={() => <SalarySheet staff={this.state.staffs}/>} />
                    <Redirect to='/nhanvien' />
                </Switch>
                <Footer />
            </div>

        );
    }
}

export default Main;