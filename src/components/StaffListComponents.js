import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { STAFFS } from './shared/staffs.jsx';


class StaffList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			staffdetail: STAFFS
		};

	}

	render() {
		const stafflist = this.state.staffdetail.map((stafflist) => {
			return (
				<div key={stafflist.id} className="col-12 col-md-6 col-lg-4">
					<Card className="mt-1">
						<CardTitle>{stafflist.name}</CardTitle>
					</Card>
				</div>
			)
		}
	)
		return (
			<div className="container">
				<div className="row">{stafflist}</div>
				<div className="row"><p>Bấm vào tên nhân viên để xem chi tiết</p></div>
			</div>
		
			)
	}
}

export default StaffList;