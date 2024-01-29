// src/redux/reducers/counterReducer.ts
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/userActions';

// Define Action Types
type IncrementAction = {
    type: typeof INCREMENT_COUNTER;
};

type DecrementAction = {
    type: typeof DECREMENT_COUNTER;
};

// Union Action Type
type CounterActionTypes = IncrementAction | DecrementAction;

//This interface defines the shape of the state managed by this reducer.
interface CounterState {
    count: number;
}

// Initial state of the counter
const initialState: CounterState = {
    count: 0
};

// Counter reducer function with TypeScript annotations
const counterReducer = (state = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count - 1 };
        default:
            return state;
        }
};

export default counterReducer;