import { combineReducers } from 'redux';

import { items, item, similarItems  } from './items.reducer';


const rootReducer = combineReducers({
  items,
  item,
  similarItems
});

export default rootReducer;