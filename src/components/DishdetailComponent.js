import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {}

	}
	render() {
		return (
			<div className="row" >
	{/*for imgs and description*/}
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={this.props.dishdetail.image} alt={this.props.dishdetail.name} />
						<CardBody>
							<CardTitle>{this.props.dishdetail.name}</CardTitle>
							<CardText>{this.props.dishdetail.description}</CardText>
						</CardBody>
					</Card>
				</div>
	{/*for comments*/}
				<div className="col-12 col-md-5 m-1"></div>
			</div >
		)
	}

};

export default DishDetail;
