import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './../reducers';


// Developing with Redux extenstion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
)
);

// Production Mode
// export const store = createStore(
//     rootReducer, 
//     applyMiddleware(
//         thunkMiddleware
//     )
// );