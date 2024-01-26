# TypeScript Objects

- Even though it is typescript we still have some javascript misbehaviors

```typescript
const user = {
    name: 'Hayes',
    email: '@gmail.com',
    isActive: true,
};  

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: 'Hayes', isPaid: false});
```
- the below code, is a function that returns an object

```typescript
function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 100}
}
```

- Even though it is typescript we still have some javascript misbehaviors
- in the form of the newUser object, we are passing in an object that has an extra property, email
- typescript will not throw an error

```typescript
function createUser({name: string, isPaid: boolean}) {

}

let newUser = {name: 'Hayes', isPaid: false, email:'h@h.com'};
createUser(newUser); 
```




