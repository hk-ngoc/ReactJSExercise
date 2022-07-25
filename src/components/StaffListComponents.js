﻿import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import dateFormat from 'dateformat';



class StaffList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedStaff: null,
			columnDefault: "col-12 col-md-6 col-lg-4"
		};

	};

	onSelectedStaff(stafflist) {
		this.setState({ selectedStaff: stafflist });
    }

	onColumnSelect(col) {
		this.setState({ columnDefault: col });
    }
	renderStaff(stafflist) {
		if (stafflist != null) {
			return (
				<div className="col-12">
					<Card>
						<CardImg width="100%" src={stafflist.image} alt={stafflist.name} />
						<CardBody>
							<CardText>Tên nhân viên: {stafflist.name}</CardText>
							<CardText>Ngày sinh: {dateFormat(stafflist.doB, "dd/mm/yy")}</CardText>
							<CardText>Ngày vào công ty: {dateFormat(stafflist.startDate, "dd/mm/yy")}</CardText>
							<CardText>Phòng ban: {stafflist.department.name}</CardText>
							<CardText>Số ngày  nghỉ còn lại: {stafflist.annualLeave}</CardText>
							<CardText>Số ngày đã làm thêm: {stafflist.overTime}</CardText>
						</CardBody>
					</Card>
			    </div>
				
			)
		} else {
			<div></div>
        }
	}

	render() {
		const staffinfo = this.props.staffdetail.map((stafflist) => {
			return (
				<div key={stafflist.id} className={this.state.columnDefault} >
					<Card onClick={() => this.onSelectedStaff(stafflist)} className="mt-1">
						<CardTitle>{stafflist.name}</CardTitle>
					</Card>
				</div>
			)
		}
	)

		return (
			<div className="container">
				<div className="row m-3">
					<button onClick={()=> this.onColumnSelect("col-md-12 m-3")} className="btn btn-success mr-3" >Xếp 1 cột</button>
					<button onClick={() => this.onColumnSelect("col-md-5 m-3")} className="btn btn-success mr-3" >Xếp 2 cột</button>
					<button onClick={() => this.onColumnSelect("col-md-3 m-3")} className="btn btn-success mr-3" >Xếp 3 cột</button>
					<button onClick={() => this.onColumnSelect("col-md-2 m-3")} className="btn btn-success mr-3" >Xếp 5cột</button>
				</div>
				<div className="row">{staffinfo}</div>
				<div className="row"><p>Bấm vào tên nhân viên để xem chi tiết</p></div>
				<div className="row">
					{this.renderStaff(this.state.selectedStaff)}
				</div>
			</div>
		
			)
	}
}

export default StaffList;