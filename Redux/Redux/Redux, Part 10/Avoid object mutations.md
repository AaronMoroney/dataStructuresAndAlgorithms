# Avoid Object mutations

- this works, however, it will mutate the object

``` javascript
const toggleTodo = (todo) => {
    todo.completed = !todo.completed;
    return todo;
}
```

- better to use this approach


``` javascript
const toggleTodo = (todo) => {
    //https://javascript.info/object-copy#cloning-and-merging-object-assign
    return Object.assign({}, todo, {
        completed: !todo.completed
    });

    //OR 

    return {
        ...todo, 
        completed: !todo.completed
    };
};
```