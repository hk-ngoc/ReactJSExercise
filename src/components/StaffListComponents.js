import React, { Component } from 'react';
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
				<div className="col-8">
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
					<Card onClick={() => this.onSelectedStaff(stafflist)} className="mt-3 bg-info">
						<CardTitle className="text-14 mt-2 mb-2 text-center">{stafflist.name}</CardTitle>
					</Card>
				</div>
			)
		}
	)

		return (
			<div className="container">
				<div className="row m-3">
					<button onClick={()=> this.onColumnSelect("col-md-12 m-3")} className="btn btn-success mr-3" >Hiển thị 1 cột</button>
					<button onClick={() => this.onColumnSelect("col-md-5 m-3")} className="btn btn-success mr-3" >Hiển thị 2 cột</button>
					<button onClick={() => this.onColumnSelect("col-md-3 m-3")} className="btn btn-success mr-3" >Hiển thị 3 cột</button>
					<button onClick={() => this.onColumnSelect("col-md-2 m-3")} className="btn btn-success mr-3" >Hiển thị 5 cột</button>
				</div>
				<div className="row">{staffinfo}</div>
				<div className="row"><h5 className="ml-3 mt-2 ">Bấm vào tên nhân viên để xem chi tiết</h5></div>
				<div className="row">
					{this.renderStaff(this.state.selectedStaff)}
				</div>
			</div>
		
			)
	}
}

export default StaffList;