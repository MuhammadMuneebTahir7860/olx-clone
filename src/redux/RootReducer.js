
import { combineReducers} from 'redux';
import ProdcutsReducer from './reducers/ProductsReducer';
import AuthReducer from './reducers/AuthReducer';
import UserReducer from './reducers/UserReducer';
const RootReducer=combineReducers({
    ProdcutsReducer,
    AuthReducer,
    UserReducer,
})

export default RootReducer;