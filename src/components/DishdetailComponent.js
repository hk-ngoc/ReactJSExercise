import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
		return (
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			)		
	};

function RenderComment({ comments }) {
	if (comments != null) {
		return (
			<ul className="list-unstyled">
				{comments.map((commentdetail) => {
					return (<div key={commentdetail.id}>
						<li>
							<p>{commentdetail.comment}</p>
							<p>--{commentdetail.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentdetail.date)))}</p>
						</li>
					</div>
					)
				})};
			</ul>
		)
	} else {
		return (
			< div ></div >
			) 
    }
}
	

const DishDetail = (props) => {
	if (props.dish != null) {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/menu'>Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							{props.dish.name}
						</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row" >
					<div className="col-12 col-md-5 m-1">   {/*for imgs and description*/}
						<RenderDish dish={props.dish} />
					</div>
					<div className="col-12 col-md-5 m-1">   {/*for comments*/}
						<h4>Comments</h4>
						<RenderComment comments={props.comments}/>
					</div>

				</div >
			</div>
		)
	} else {
		return (<div></div>)
	}

}

export default DishDetail;
