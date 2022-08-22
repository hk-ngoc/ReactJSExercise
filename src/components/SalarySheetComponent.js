import React from 'react';
import { Card, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function RenderSalarySheet({ staff }) {
	const salcount = (staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0);

	return (
		<Card>
			<CardBody>
				<CardTitle>{staff.name}</CardTitle>
				<CardText>Mã nhân viên: {staff.id}</CardText>
				<CardText>Hệ số lương: {staff.salaryScale}</CardText>
					<CardText>Số ngày làm thêm: {staff.overTime}</CardText>
					<CardText className="shadow bg-info p-2">LƯƠNG: {salcount}</CardText>
			</CardBody>
		</Card>
	);
}

const SalarySheet = (props) => {
	const [sortSalary, setSortSalary] = useState(false);

	const salsheet = props.staff.sort(
		(a, b) => sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale).map(
			(staff) => {
		return (
			<div key={staff.id} className="col-12 col-sm-6 col-md-4 mt-4 mb-3">
				<RenderSalarySheet staff={staff} />
			</div>
		)
	});

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/nhanvien'>NHÂN VIÊN</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						BẢNG LƯƠNG
					</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className="row">
				<div className="col-12 col-sm-4">
					<h3 className="mt-3">BẢNG LƯƠNG NHÂN VIÊN</h3>
					<hr />
				</div>
				<div className="col-12 col-sm-4">
					<button className="mt-3" onClick={() => setSortSalary(!sortSalary)}>Xếp theo HSL</button>
				</div>
			</div>
			<div className="row">
				{salsheet}
			</div>
		</div>
	)
};

export default SalarySheet;