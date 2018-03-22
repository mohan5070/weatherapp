import { combineReducers } from 'redux';
import weatherReport from './weatherReducer'

const weatherApp = combineReducers({
    weatherReport
});
export default weatherApp;