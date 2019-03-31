import 'whatwg-fetch';

const apiAddress = "http://5b35ede16005b00014c5dc86.mockapi.io",
  requestOptions = {
    method: 'GET'
}, handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            if (response.status === 401) {
                // auto logout if 401 response returned from api
            } else if(response.status === 202) { // update operation has not been commited yet
                return Promise.reject(error);
            } else { // other errors
                return Promise.reject(error);
            }
        } else {
            /* Start: for future use */
            // if(response.status === 200) { // update operation commited (with additional data)
            //     return data;
            // } else if(response.status === 204) { // update operation commited (without additional data)
            //     return data;
            // } else {
            //     return data;
            // }
            /* End: for future use */
            return data;
        }
    });
}, getItems = () => fetch(`${apiAddress}/list`, requestOptions).then(handleResponse),
   getItem = (id) => fetch(`${apiAddress}/view/${id}`, requestOptions).then(handleResponse),
   getSimilarItems = (id) => fetch(`${apiAddress}/similar/${id}`, requestOptions).then(handleResponse);

export const itemService = {
    getItems,
    getItem,
    getSimilarItems
};
