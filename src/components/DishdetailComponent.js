import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	renderDish(dish) {
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

	renderComment(comment) {
    	return (
				
				<ul className="list-unstyled">
					{comment.map((commentdetail) => {
						return (<div key={commentdetail.id}>
							<li>
								<p>{commentdetail.comment}</p>
								<p>--{commentdetail.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
							</li>
						</div>
						)
					}
				)
			}
				</ul>
		)			
	}
	

	render() {
		if (this.props.dish != null) {
			return (
				<div className="container">
					<div className="row" >
						{/*for imgs and description*/}
						<div className="col-12 col-md-5 m-1">
							{this.renderDish(this.props.dish)}
						</div>

						{/*for comments*/}
						<div className="col-12 col-md-5 m-1">
							<h4>Comments</h4>
							{this.renderComment(this.props.dish.comments)}

						</div>
					</div >
				</div>

			)
		} else {
			return (<div></div>)
        }
		
	}

};

export default DishDetail;
