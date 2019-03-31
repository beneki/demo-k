import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './../../assets/style/components/item.less';

class Item extends Component {
    constructor(props ){
        super(props);
    }
  render() {
    const { title, price, image } = this.props;
    return (
     <div className="item">
        <Card>
          <CardImg top width="100%" src={require('./../../assets/images/nintendo-switch-thumbnail.png')} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{price}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export { Item };
