import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStaffList({ staff }) {
	return (
		<Card>
			<Link to={`/nhanvien/${staff.id}`} >
				<CardImg width="100%" src={staff.image} alt={staff.name} />
				<CardImgOverlay>
					<CardTitle>{staff.name}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

const StaffList = (props) => {
	const stafflist = props.staffs.map((staff) => {
		return (
			<div key={staff.id} className="col-6 col-sm-4 col-md-2">
				<RenderStaffList staff={staff} />
			</div>
		)
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3>NHÂN VIÊN</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				{stafflist}
			</div>
		</div>
	)
};

export default StaffList;