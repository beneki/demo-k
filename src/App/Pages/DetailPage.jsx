import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Breadcrumb, BreadcrumbItem ,Row, Col, Button, ButtonGroup, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loader-spinner';
import { history } from '../../helpers';
import { itemActions } from '../../actions';
import './../../assets/style/global/main.css';
import './../../assets/style/pages/DetailPage.less';
import {withRouter} from 'react-router';
import { Item } from './../components/Item';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: this.props.item
        }
        
    }

    componentDidMount() {
        const cId = this.props.id;
        this.loadingCurrentItem(cId);
        this.loadingSimilarItems(cId);
    }

    loadingCurrentItem(cId) {
        if(!this.state.item) {
            this.props.dispatch(itemActions.getItemDetail(cId));
        }
    }

    loadingSimilarItems(cId) {
        if(!this.props.similarsLoading) {
            this.props.dispatch(itemActions.getSimilars(cId));
        }
    }

    generateSimilarItems() {
        const xcc = this.props.similars.map((itm) => {
            const cItm = itm.attributes;
            return <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2" key={itm.id}>
                <Item title={cItm.title} price={cItm.price} image={cItm.image} />
            </div>;
        });
        return xcc;
    }

    tidyupStr(text) {
        return text.split(/\\n\\n|\\n/).map((txt, i) => <p key={i}>{txt}</p>); 
        
    }

    render() {
        if(this.props.item){
            const {
                title,
                price,
                condition,
                location,
                seller_name,
                seller_type,
                phone,
                description,
                links
            } = this.props.item.attributes;
            const { image } = links;
            return (
                <section id="item-detail">
                    <div className="container-fluid">
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem><a href="#">Electronics</a></BreadcrumbItem>
                            <BreadcrumbItem active>Games & Console</BreadcrumbItem>
                            <BreadcrumbItem active>{ title }</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="row">
                            <div className="col-md-8">
                                <h6 className="title">{ title }</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <img className="item-img" src={require('./../../assets/images/nintendo-switch-desktop.png')} alt="img" />
                            </div>
                            <div className="col-md-4">
                                <div className="row controller-btns">
                                    <div className="col-6">
                                        <div className="icon-btn">
                                            <FontAwesomeIcon icon="heart" />
                                            <span>Wishlist</span>
                                        </div>                               
                                    </div>
                                    <div className="col-6">
                                        <div className="icon-btn right">
                                            <FontAwesomeIcon icon="share-alt" />
                                            <span>Share</span>
                                        </div>                                
                                    </div>
                                </div>
                                <div className="price-box">
                                    <p>price</p>
                                    <h4>{ price }</h4>
                                </div>
                                <div className="item-stuffs">
                                    <p>item condition</p>
                                    <p>{ condition }</p>
                                </div>
                                <div className="item-stuffs">
                                    <p>item location</p>
                                    <p>{ location }</p>
                                </div>
                                <p style={{margin: '1.5em 0 1em'}}>seller info</p>
                                <div className="row seller-info">
                                    <div className="col-12 col-sm-2">
                                        <img src={require('./../../assets/images/person.png')} alt="seller" />
                                    </div>
                                    <div className="col-12 col-sm-10 profile">
                                        <p className="seller-name">{seller_name}</p>
                                        <p className="seller-type">{seller_type}</p>                                    
                                    </div>
                                </div>
                                <div className="interested-in-ad">
                                    <hr />
                                    <p>Interestedwith the Ad?</p>
                                </div>
                                <div className="row contact-btns">
                                    <div className="col-4 col-sm-4 col-md-12"><Button className="ghost-btn"><FontAwesomeIcon icon="phone" />{ phone }</Button></div>
                                    <div className="col-4 col-sm-4 col-md-12"><Button className="ghost-btn"><FontAwesomeIcon icon="envelope" />{'Email'/* I've Harcoded email because api didn't provide person's Email */}</Button></div>
                                    <div className="col-4 col-sm-4 col-md-12"><Button><FontAwesomeIcon icon="comment-alt" />Chat</Button></div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row flag-txts">
                                    <div className="col-6" style={{color: '#E01A1A', paddingBottom: '1em'}}><h4 style={{textDecoration: 'underline'}}> Description </h4></div>
                                    <div className="col-6">
                                        <div className="icon-btn right">
                                            <FontAwesomeIcon icon="flag" />
                                            <span>Report Ad</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="desc">
                                        {this.tidyupStr(description)}
                                </div>                            
                            </div>
                        </div>
                        <div className="row">
                            { this.props.similars.length > 0 && this.generateSimilarItems() }
                        </div>
                    </div>
                </section>
            );
        }
        return (
            <h4>is loading ....</h4>
        )
    }
}

function mapStateToProps(state) {
    const { currentLoading, item, currentError } = state.item;
    const { similarsLoading, similars, similarsError } = state.similarItems;
    return {
        currentLoading,
        item,
        currentError,
        similarsLoading,
        similars,
        similarsError
    };
}

const connectedDetailPage = connect(mapStateToProps)(withRouter(DetailPage));
export { connectedDetailPage as DetailPage }; 