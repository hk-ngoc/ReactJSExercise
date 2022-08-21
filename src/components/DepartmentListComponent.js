import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';



function RenderDepartmentList({ dept }) {
	return (
		<Card>
			<CardBody>
			<CardTitle>{dept.name}</CardTitle>
				<CardText> Số lượng nhân viên: {dept.numberOfStaff}</CardText>
			</CardBody>
		</Card>
	);
}

const DepartmentList = (props) => {
	const deptlist = props.department.map((dept) => {
		return (
			<div key={dept.id} className="col-12 col-sm-6 col-md-4 mt-4 mb-3">
				<RenderDepartmentList dept={dept} />
				<hr/>
			</div>
		)
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3>DANH SÁCH PHÒNG BAN</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				{deptlist}
			</div>
		</div>
	)
};

export default DepartmentList;