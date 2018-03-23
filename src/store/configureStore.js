import { createStore, applyMiddleware} from 'redux';
import weatherApp from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        weatherApp,
        initialState,
        applyMiddleware(thunk)
    );
}