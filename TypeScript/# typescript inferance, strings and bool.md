# typescript inferance, strings and booleans

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## number

- JavaScript does not have a special runtime value for integers, so there's no equiavalent for int or float - everything is simply a number

## boolean

```typescript
let userIsLoggedIn = false;
let isLoggedIn: boolean = true;

// we say that the boolean is 'inferred'
```

**Type inference** 

- e.g let userId: number = 1234321.3
- while this is exactly what typescript is used for; it is not neccessary to do this everytime
- typescript can detect the type automatically, and there are use cases when we explicitly say the inference, and other times we allow TS to detect.
