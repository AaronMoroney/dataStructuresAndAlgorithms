# Redux: Store Methods: getState(), dispatch(), and subscribe()

## Store

### store binds together the three principles of redux
- it holds the current app state obj
- lets you dispatch actions
- when you create it, you need to specify the reducer that tells how the state is updated with actions.

### store.getState()
- gets the current state fo of the reducx store

### store.dispatch()
- dispatches actions to change state fo your app

### store.subscribe()
- lets you register a callback that gets called anytime an action has been dispatched, so that you can update the UI of your app, to reflect the curr app state.

``` javascript
import { createStore } from 'redux'
const store = createStore(counter);

const render = () => {
    document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
}) 
```