# READONLY & Optional

- we can mark things as readOnly for example

```typescript
type user = {
    readonly _id: string, //this is a unique id, coming from the database, now it cannot be changed
    name: string,
    email: string,
    isActive: boolean, 
    creditCardDetails?: number //this is optional
}
```

```typescript
let myUser: User = {
    _id: "1",
    name: "Hayes",
    email: "", 
    isActive: true, 
    //we dont have to pass in creditCardDetails, it's optional
}

myUser.email = 'h@h.com'; //this is allowed
myUser._id = 5; //this is not allowed
```

- combining types

```typescript
type cardDate = {
    expiryDate: string,
}
type cardNumber = {
    number: string,
}
```
- we can join these two types together
- we can also add another property
- but it's not a good practice to do this

```typescript
type cardDetails = cardDate & cardNumber & {
    cvv: string
}; //this is a union of the two types, with an extra property
```
