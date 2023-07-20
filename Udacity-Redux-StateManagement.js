//https://learn.udacity.com/nanodegrees/nd019/parts/cd0547/lessons/6910ca63-041d-4b8e-9c05-a23dbea80908/concepts/ab6cce84-103f-40bf-afe5-36fdaab969a8

/*
    ============================
    Managing State: Predictable state management
    ============================

    most apps are composed of UI + state

    state mismanagement leads to bugs (new notification, but no notification)

    The best way to improve the quality of the apps you build is to improve the predictability 
    of the applications state

    In traditional apps, the state of all the data is littered throughout the every single page
    of the app 

    ======
    REDUX
    ======


    https://youtu.be/IDdb6baBQyo

    the main goal of redux is to make the state management of the application more predictable

    -- to achieve this, data is stored OUTSIDE the app, and referenced by the app

        /\
       /  \
      /    \
     /      \
    / DATA   \    
    ----------
    ____________
    |           |
    |           |
    |           |
    |     APP   |
    |           |
    |           |
    ____________

    w/ changes like this - if the data is changed, it only needs to be changed in one place
    the areas of the app that are referencing this data - will be updated since the source has changed

    -- if all data is in one location, then strict rules can be made on how to update that state
    == more predictability.

    ==============
    THE STATE TREE
    ==============

    {
        recipes: [
            { … },
            { … },
            { … }
        ],
        ingredients: [
            { … },
            { … },
            { … },
            { … },
            { … },
            { … }
        ],
        products: [
            { … },
            { … },
            { … },
            { … }
        ]
    }
    
    All the data for the application is stored in one single location
    ** this is what is meant by the state tree

    how will we interact w/ the state tree?
    =======================================

    --1. getting the state
    --2. listening for changes
    --3. updating the state

    ======================================
    3. Create Store: Getting and listening  
    ======================================
    https://learn.udacity.com/nanodegrees/nd019/parts/cd0547/lessons/6910ca63-041d-4b8e-9c05-a23dbea80908/concepts/21cf65b2-6f44-4b5d-a057-6e4d065cbc00
   
*/
//library code
function createStore () {
    //--1. the state tree
    //--2. a way to get the state tree (API or etc)
    //--3. a way to listen and respond to the state changing
    //--4. a way to update the state

    let state; 
    let listeners = []; //keeps track of fns that want to be notified when the state changes

    const getState = () => state // acts as an API. returns current state of app

    
    const subscribe = (listener) => { 
        //below: allows the comps. or fns. to subscribe to changes in state, 
        //when the state changes all the subscribed listeners (callback fns) will be notified
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) =>  l !== listener)
        }
    }

    const dispatch = (action) => {
        state = todos(state, action)
        //loop through listeners & invoke
        listeners.forEach((listener) => listener());
    }
    return { //obj - whenever create getStore is invoked
        getState,
        subscribe
    }  
}

/*
    Listening to changes 
    ====================
*/


const store = createStore(); //invoke
store.subscribe(() => { //listener
    console.log('the new state is: ', store.getState())
})
const unsubscribe = store.subscribe(() => { //listener
    console.log('the store changed: ', store.getState())
})

/*
    so far
    ======
    store which contains:  
    --state tree
    --getState - returns the state
    --subscribe - listens for changes 
*/

/*
    rule #1
    =======
    only an  event can change the state of the store

    - eg: Event

    ADD
    ===
    {
        type: 'ADD_TODO'
        todo: {
            id: 0, 
            name: 'learn redux', 
            complete: false
        }
    }

    REMOVE
    ======
    {
        type: 'REMOVE_TODO'
        todo: {
            id: 0, 
        }
    }

    TOGGLE 
    ======
    {
        type: 'TOGGLE_TODO'
        todo: {
            id: 0, 
        }
    }

    THESE ARE CALLED: ACTIONS
    -- record the state of change

    All types should be specific, E.g a goal added to the app

    ADD GOAL
    ========
    {
        type: 'ADD_GOAL'
        goal: {
            id: 0, 
            name: 'become a full-time developer', 
        }
    }

    Let's take another look at an Action:

    {
    type: "ADD_PRODUCT_TO_CART"
    }

    an Action is clearly just a plain JavaScript object. What makes this plain JavaScript 
    object special in Redux, is that every Action must have a type property. 
    
    The purpose of the type property is to let our app (Redux) know exactly 
    what event just took place

    Action Creators are functions that create/return action objects. For example:

    const addItem = (item) => ({
    type: ADD_ITEM,
    item,
    });
*/

/*
    ==============
    4. UPDATING STATE
    ==============
    https://learn.udacity.com/nanodegrees/nd019/parts/cd0547/lessons/6910ca63-041d-4b8e-9c05-a23dbea80908/concepts/90993600-5339-474e-9799-7f2322599f9f

    Redux is a predictable state container for JavaScript Apps
    -- entire state of the application

    rule #2 - pure functions 
    ==============
    what is a pure function?

    --1. Return the same result if the same arguments are passed in
    --2. Depend solely on the arguments passed into them
    --3. Do not produce side effects, such as API requests and I/O operations
*/

//state = [], bypasses the fact on first call state will be undefined
//reducer function, must be pure fn.

//app code
function todos (state = [], action) {
    if(action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }
    return state
}


