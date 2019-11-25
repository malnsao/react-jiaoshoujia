import { createStore } from 'redux';
import incrementReducer from './reducers';

const store = createStore(incrementReducer);

export default store;