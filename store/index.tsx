import { createStore, combineReducers, Store, AnyAction } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import rootReducer, { AppState } from './reducers/reducer';

// Create and export the store
export const store: Store<AppState, any> = createStore(rootReducer);