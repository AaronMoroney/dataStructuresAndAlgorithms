# 11 & 12
```javascript
//state = [], default parameter
//todos reducer
const todos = (state = [], action) => {
    switch (action.type) {
        //how the array of todos is updates
        case 'ADD_TODO':
            return [
                ...state, 
                {
                    id: action.id, 
                    text: action.text, 
                    completed: false
                }
            ];
        //how an individual todo is updated
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo, 
                    completed: !todo.completed
                };
            });
        default:
            //has to return the current state for any unknown action
            return state;
    }
};
```

# 13

- Anytime a func does too many things, you want to extract a new func from it 


```javascript

//singular(!) todo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

//todos(!) array
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        //calling the above reducer
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
    //calling the above reducer
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

```

- Comments, further explanation from Dan:

"The todos reducer handles changes in array, and todo reducer handles changes to individual todo. There is no shared code between them, again, except for the switch statement. As the logic gets more complicated (more actions are handled), todo reducer will grow, but todos will stay pretty much the same. That’s the point of separating them. If they’re not separated, adding more actions that change individual todos will require copy-pasting code for changing todo at an index—now that would be duplication." - Dan Abramov

https://egghead.io/lessons/react-redux-reducer-composition-with-arrays