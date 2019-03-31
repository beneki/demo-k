import React from 'react';
import { Router, Route, Rrdirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './../helpers';
// import { alertActions } from './../actions';
import { AppContainer } from './';
import { NotFound, NotAuthorized } from './Handlers';
import { DetailPage, ListPage } from './Pages';
import './../assets/style/global/global.less';
import { Header, Footer } from '././components';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
           // this.props.dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            
            <Router history={history}>
                <div className="main-container">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ListPage} />
                        <Route path="/item/:id" render={({match}) => (
                             <DetailPage id={match.params.id} />
                            )} 
                        />
                        <Route path="/not-authorized" exact component={NotAuthorized} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const connectedApp = connect(null)(App);
export { connectedApp as App };
