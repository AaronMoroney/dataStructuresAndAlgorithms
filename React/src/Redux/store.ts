// src/redux/store.ts

import { createStore, Store } from 'redux';
import rootReducer, { RootState } from './reducers';

// Configure the store
const configureStore = (): Store<RootState> => {
    const store = createStore(
        rootReducer,
    );

    return store;
};

export default configureStore();