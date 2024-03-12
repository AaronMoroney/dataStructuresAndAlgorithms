// src/redux/reducers/index.ts

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// The root reducer's state type
export interface RootState {
    counter: ReturnType<typeof counterReducer>;
    // Other state types would go here
}

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer
    // other reducers would be added here
});

export default rootReducer;