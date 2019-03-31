import { itemConstants } from '../constants';
import { itemService } from '../services';

const actionCreator= (type) => {
    return {
        request: () => ({ type: itemConstants[`${type}_REQUEST`] }),
        success: (items) => ({ type: itemConstants[`${type}_SUCCESS`], items }),
        failure: (error) => ({ type: itemConstants[`${type}_FAILURE`], error })        
    }
}, getAllItems = () => {
    return dispatch => {
        const getItems = actionCreator('GETITEMS');
        dispatch(getItems.request());

        itemService.getItems()
            .then(
                items => dispatch(getItems.success(items)),
                error => dispatch(getItems.failure(error))
            );
    };

}, getItemDetail = (id) => {
    return dispatch => {
        const getItem = actionCreator('GETITEM');
        dispatch(getItem.request());

        itemService.getItem(id)
            .then(
                item => dispatch(getItem.success(item)),
                error => dispatch(getItem.failure(error))
            );
    };
}, getSimilars = (id) => {
    return dispatch => {
        const getSimilars = actionCreator('GETSIMILARS');
        dispatch(getSimilars.request());

        itemService.getSimilarItems(id)
            .then(
                similarItems => dispatch(getSimilars.success(similarItems)),
                error => dispatch(getSimilars.failure(error))
            );
    };
}, setCurrentItmInMemory = (cid) => {
    return dispatch => {
        const setCurrentItm = () => ({ type: itemConstants.SETCURRENTITEMINMEMORY, cid });
        dispatch(setCurrentItm());
    };
};

export const itemActions = {
    getAllItems,
    getItemDetail,
    getSimilars,
    setCurrentItmInMemory
};