import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './helpers';
import { App } from './App';
import 'promise-polyfill/src/polyfill';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faChevronLeft, faChevronRight, faHeart, faShareAlt, faPhone, faEnvelope, faCommentAlt, faFlag } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faChevronLeft, faChevronRight, faHeart, faShareAlt, faFlag, faPhone, faEnvelope, faCommentAlt);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
