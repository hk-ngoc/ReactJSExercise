import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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

function RenderComment({ comment }) {
    	return (				
				<ul className="list-unstyled">
					{comment.map((commentdetail) => {
						return (<div key={commentdetail.id}>
							<li>
								<p>{commentdetail.comment}</p>
								<p>--{commentdetail.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentdetail.date)))}</p>
							</li>
						</div>
						)
					}
				)
			}
				</ul>
		)			
	}
	

const DishDetail = (props) => {
	if (props.dish != null) {
		return (
			<div className="container">
				<div className="row" >
					
					<div className="col-12 col-md-5 m-1">   {/*for imgs and description*/}
						<RenderDish dish={props.dish} />
					</div>
				
					<div className="col-12 col-md-5 m-1">   {/*for comments*/}
						<h4>Comments</h4>
						<RenderComment comment={props.dish.comments}/>
					</div>

				</div >
			</div>
		)
	} else {
		return (<div></div>)
	}

}

export default DishDetail;
