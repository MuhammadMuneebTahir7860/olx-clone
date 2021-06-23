
import { combineReducers} from 'redux';
import ProdcutsReducer from './reducers/ProductsReducer';
import AuthReducer from './reducers/AuthReducer';
import UserReducer from './reducers/UserReducer';
import FavProductsReducer from './reducers/FavProductsReducer';
const RootReducer=combineReducers({
    ProdcutsReducer,
    AuthReducer,
    UserReducer,
    FavProductsReducer,
})

export default RootReducer;