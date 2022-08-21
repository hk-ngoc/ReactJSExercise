import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


function RenderStaff({ staff }) {
	return (
		<div key={staff.id} className="col-12 mb-5">
			<Media tag="li">
				<Media left middle className="col-12 col-sm-4 col-md-3">
					<Media object src={staff.image} alt={staff.name} style={{ width: 250, height: 260 }} />
				</Media>
				<Media body className="ml-3 col-12 col-sm-8 col-md-9">
					<Media heading>Họ và tên: {staff.name}</Media>
					<p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yy")}</p>
					<p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yy")}</p>
					<p>Phòng ban: {staff.department.name}</p>
					<p>Số ngày  nghỉ còn lại: {staff.annualLeave}</p>
					<p>Số ngày đã làm thêm: {staff.overTime}</p>
				</Media>
			</Media>
		</div>
	)
};

const StaffDetail = (props) => {
	if (props.staff != null) {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/nhanvien'>Nhân viên</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							{props.staff.name}
						</BreadcrumbItem>
					</Breadcrumb>
				</div>
				<div className="row" >
					<RenderStaff staff={props.staff}/>
				</div >
			</div>
		)
	} else {
		return (<div></div>)
	}

}

export default StaffDetail;