
let initialState = {
    favProducts: [],
}

function FavProductsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVOURITE":
            let newData = state.favProducts;
            newData.push(action.payload);
            return {
                ...state,
                favProducts: newData,
            }
        case "GET_FAVOURITIES":
            return {
                ...state,
                favProducts: action.payload,
            }
        case "UNFAV_PRODUCT": {
            let filterFavProducts = state.favProducts.filter((item) => item.favDocId != action.payload);
            return {
                ...state,
                favProducts: filterFavProducts,
            }
        }
        default:
            return state;

    }
}

export default FavProductsReducer;