import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './reducers/profile-reducer';


const reducers = combineReducers({
  profilePage: profileReducer
});


// Подключение расширения Redux DevTools в Google Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

window.store = store;

export default store;