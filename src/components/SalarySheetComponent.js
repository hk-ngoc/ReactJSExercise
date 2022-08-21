import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';


function RenderSalarySheet({ staff }) {
		return (
		<Card>
			<CardBody>
				<CardTitle>{staff.name}</CardTitle>
				<CardText>Mã nhân viên: {staff.id}</CardText>
				<CardText>Hệ số lương: {staff.salaryScale}</CardText>
					<CardText>Số ngày làm thêm: {staff.overTime}</CardText>
					<CardText className="shadow bg-info p-2">LƯƠNG: {(staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0)}</CardText>
			</CardBody>
		</Card>
	);
}

const SalarySheet = (props) => {
	const salsheet = props.staff.map((staff) => {
		return (
			<div key={staff.id} className="col-12 col-sm-6 col-md-4 mt-4 mb-3">
				<RenderSalarySheet staff={staff} />
			</div>
		)
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3 className="mt-3">BẢNG LƯƠNG NHÂN VIÊN</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				{salsheet}
			</div>
		</div>
	)
};

export default SalarySheet;