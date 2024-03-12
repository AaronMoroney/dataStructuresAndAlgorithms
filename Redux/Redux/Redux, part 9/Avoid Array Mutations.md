# Avoid array Mutations

- this technically works, but it mutate

```javascript
const addCounter = (list) => {
    list.push(0);
    return list;
}
```

- Instead, we can use concat, or spread, which does not modify the original array

```javascript
const addCounter(list) => {
    //can use spread or concat
    return [...list, 0];
};

```

- Remove counter
- can do it using the splice method, however, is is a mutation
- instead, use slice

```javascript
const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index), 
        ...list.slice(index + 1)
    ];
}
```
- add the count in counter

```javascript
const incrementCounter  = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1, 
        ...list.slice(index + 1)
    ];
}
```
