# JSON

https://javascript.info/json

- complex object, and we’d like to convert it into a string, to send it over a network, or just to output it for logging purposes.

## JSON.stringify

- The JSON (JavaScript Object Notation) is a general format to represent values and objects

JavaScript provides methods:

**JSON.stringify** to convert objects into JSON.
**JSON.parse** to convert JSON back into an object.

```javascript

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/
```

- The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.

**JSON-encoded object has several important differences from the object literal**:

- Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John"
- Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30

- JSON.stringify can be applied to primitives as well.

- JSON supports following data types:

- Objects { ... }
- Arrays [ ... ]
Primitives:
-- strings,
-- numbers,
-- boolean values true/false,
-- null.

```javascript
// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

```

the following will be ignored by JSON.stringify:

```javascript
let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)
```

- nested objects are supported and converted automatically.

```javascript
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

alert( JSON.stringify(meetup) );
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/
```

- There must be no circular references. If there are any, JSON.stringify throws an error.

##Excluding and transforming: replacer

