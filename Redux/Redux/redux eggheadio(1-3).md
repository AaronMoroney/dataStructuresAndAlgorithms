# Redux - Dan Abramov - Egghead.io

## Redux,  part 1, Single Immutable State Tree

- represent the whole state of your app as a single JS obj

initial state:

[ object Object] {
        todos: [], 
        visibilityFilter: "SHOW ALL"
    }
}

When added, added to todos array:

[ object Object] {
    todos: [[object, Object]] {
        completed: true,
        id: 0,
        text: "hey"
    }
}, [ object Object] {
    todos: [[object, Object]] {
        completed: false,
        id: 1,
        text: "ho"
    }
}

###  Everything that changes in your application is contained in the state or the state tree

## Redux, part 2 - Describing state changes with actions

### The state tree is read only 

- everytime you need to change the state, you have to dispatch an   action

- the action is the minimal representation of the changes to the data in your app

- has a 'type' property, represented by a string, it is the only requirement

- e.g: everytime a visibility filter is clicked, the filter component dispatches an action, with a type, 'SET_VISIBILITY_FILTER', and pass in the desired filter string, 'SHOW_ACTIVE'

- the state is readonly, the only way to change the state tree is to dispatch an action, an action is a plain js obj, describing in the minimal way, what changed in the application.

## Redux, part 3 - Pure and Impure Functions

- pure, FN whos return value, depends solely on its arguments, have no side effects, such as network reqs, or DB calls, do not modify the value it is passed, instead returns a new array.

e.g 

```javascript
function squareAll(items) {
    return items.map(square);
}
```

- impure FN, may call the DB or network, may override the values passed to them

### Redux FN's, have to be pure 

## Redux, part 4 - The Reducer Function

- the UI, is most predictabkle as when it is described as a pure func as the application state (originally coined by react)

- Redux, complements approach - state mutations need to be described as a pure fN, takes prev. state and the action dispatched and returns the next state of your application. 

- inside any redux app, there is one function, that has the prev state, takes in an action being dispatched, and returns the new state of the application.

- it doesn't modify the state given to it, has to return a new JS obj.

- even in large app, there is a single func that manages the whole state of the app that calculates how the next state will be calculated, using prev state, actions being dispatched.

- if visibility filter is changed, a new obj is created, but a reference is kept to the prev. version.this keeps redux fast

### third principle - to describe state mutations, you write 1 func, which takes prev. state, action to be dispatched, returns the next state of the app. the function has to be pure and it is called a reducer.

## Writing a counter reducer with tests

