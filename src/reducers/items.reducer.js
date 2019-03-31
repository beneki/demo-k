import { itemConstants } from './../constants';

const ITEMS_INITIAL_STATE = { 
  loading: false,
  list: [],
  error: null
    
}, ITEM_INITIAL_STATE = { 
  currentLoading: false,
  item: null,
  currentError: null

}, SIMILARS_INITIAL_STATE = { 
  similarsLoading: false,
  similars: [],
  similarsError: null

};

export const items = (state = ITEMS_INITIAL_STATE, action) => {
  switch (action.type) {
    case itemConstants.GETITEMS_REQUEST:
      return { ...state, loading: true };
    case itemConstants.GETITEMS_SUCCESS:
      return { ...state, list: action.items.data, loading: false };
    case itemConstants.GETITEMS_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state
  }
}

export const item = (state = ITEM_INITIAL_STATE, action) => {
  switch (action.type) {
    case itemConstants.GETITEM_REQUEST:
      return { ...state, currentLoading: true };
    case itemConstants.GETITEM_SUCCESS:
      return { ...state, item: { ...action.items.data, attributes: { ...action.items.data.attributes, links: {...action.items.links}}  }, currentLoading: false };
    case itemConstants.GETITEMS_FAILURE:
      return { ...state, currentError: action.error, currentLoading: false};
    case itemConstants.SETCURRENTITEMINMEMORY:
      return { ...state, item: state.list.find(action.cid)};
    default:
      return state
  }
}

export const similarItems = (state = SIMILARS_INITIAL_STATE, action) => {
  switch (action.type) {
    case itemConstants.GETSIMILARS_REQUEST:
      return { ...state, similarsLoading: true };
    case itemConstants.GETSIMILARS_SUCCESS:
      return { ...state, similars: action.items.data, similarsLoading: false };
    case itemConstants.GETSIMILARS_FAILURE:
      return { ...state, similarsError: action.error, similarsLoading: false};
    default:
      return state
  }
}