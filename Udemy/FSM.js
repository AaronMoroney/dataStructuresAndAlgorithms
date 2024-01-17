/* 
    ============
    FSM - https://www.youtube.com/watch?v=iDZxjJYMOUQ
    ============

    the actions your application is in determines the actions that it takes 
    therefore creating a more predictable & less error prone programme

    A state machine is a machine - that can be in one of a finite number of states at a given time 
    - the transitions between the states happen in a deterministic way
*/

//xState - finite state machine react -- in the APP component

import React from 'react';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';
import './App.css';

const toggleMachine = new Machine({
    id: 'toggleMachine', 
    initial: 'inactive',
    states: {
        inactive: {
            on: {
                TOGGLE: 'active'
            }
        }, 
        active: {
            on: {
                TOGGLE: 'inactive'
            }
        }
    }
})

function App() {
    const [ current, send ] = useMachine(toggleMachine)
    console.log(current);
    return (
        <div>
            <button 
                onClick={() => {
                    send('TOGGLE');
                }}
            >
            Toggle
            </button>
            {current.matches('active') ? <span> we are active </span> : <span> we are inactive </span>}
        </div>
    )

    

}

export default App;
