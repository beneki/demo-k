import React from 'react';
import { history } from './../../helpers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, ButtonGroup, Alert } from 'reactstrap';
import Loader from 'react-loader-spinner';
import { itemActions } from '../../actions';
import { Item } from './../components';
import './../../assets/style/global/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.dispatch) {
            this.props.dispatch(itemActions.getAllItems());
        }
        
    }

    showItem(itemId) {
        itemActions.setCurrentItmInMemory(itemId);
        history.push(`/item/${itemId}`);
    }
    
    generateList() {
        const list = this.props.list;
        if(list) {
            return list.map((item, ix) => {
                const { title, price, links } = item.attributes;
                return <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2" onClick={this.showItem.bind(this, item.id)} key={item.id}><Item title={title} image={links.image} price={price} /></div>;
            });
        }
        return "";
    }

    render() {
        return (
            <section id="item-list">
                <div className="container-fluid">
                    <div className="row item-list">
                        { this.props.list.length > 0 && this.generateList() }
                        </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { 
        loading,
        error,
        list,
        currentItem
     } = state.items;
    return {
        loading,
        error,
        list,
        currentItem
    };
}

const connectedListPage = connect(mapStateToProps)(ListPage);
export { connectedListPage as ListPage }; 