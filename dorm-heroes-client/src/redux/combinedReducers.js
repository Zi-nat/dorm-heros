import { combineReducers } from 'redux';
import messages from './reducers/messages';


const combinedReducers = combineReducers({
    messages,
});

export default combinedReducers;
