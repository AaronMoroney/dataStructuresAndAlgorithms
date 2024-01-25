# TypeScript Functions part 1

- define the type of the function
- in this case, the function will take in a number, and return a number
- if we dont define the type, it will be inferred as any

```typescript
function addTwo(num: number) {
   return num + 2 
};
```
- if this is not inferred, it will be inferred as any
- it will allow us to run non string functions on strings, which will cause errors

```typescript
function getUpper(val: string) {
    return val.toUpperCase(); 
}
``` 

```typescript
function signUp(name: string, email: string, isPaid: boolean) {
    console.log(name, email, isPaid);
}
```
- we can define default values for the parameters
- if we dont pass in a value for isPaid, it will be set to false

```typescript
let login = (name: string, email: string, isPaid: boolean = false) => {
    console.log(name, email, isPaid);
}

login('a', 'a@a.com'); //it will interpret isPaid as false because we set it as a default
```

## TypeScript Functions part 2

- we can define the type of the return value, as well as the parameters

```typescript
//example
function mySecondAddTwo (val: number) {
    // return val + 2;
    return 'hello'; //completely valid
}
function mySecondAddTwo (val: number): number {
    // return val + 2;
    return 'hello'; //throws an error
}
```

- returning a value in an arrow function

```typescript
const getHello = (s: string):string => {
    return "";
}
```
- if we change to number, typeScript is aware of the upcoming context


```typescript
const heros = ["superman", "batman", "flash"];
// const heros = [1, 2, 3];

heros.map(hero => {
    return `hero is ${hero}`;
});
```

- ^ above, we should be very aware of the return type, this is better syntax

```typescript
heros.map(hero): string => {
    return `hero is ${hero}`;
});
```
- void, it will not return anything

``` typescript
function consoleError(errmsg: string):void {
    console.log(errmsg);
    //return 200; //throws an error
}
```
- ^ void, it will not return anything
- never, intentionally crashes the function
- robust error handling - the function will throw an exception, or terminate the execution of the program

``` typescript
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    //return 200; //throws an error
}
```






