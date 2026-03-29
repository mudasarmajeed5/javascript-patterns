# Singeltion Pattern in Javascript

## Can be created with class.

singletion instantiation
only one instance should exist

if not then we should throw an error.

no part of the application should be able to modify the instance..

can be done by

```javascript
object.freeze;
```

We should always import the instance not the class Itself,

```javascript
// now instances can be created via objects only like
export const obj = {
  objectProperties: {},
  data: {},
};
```

### CONS

- Maybe a singeltion is importing another module and we don't know about that. (so we could be modifying the object without knowing)
- one single change in singeltion class, can break the application sometimes, if not **used right**

# Proxy patttern

## Definition:

In proxy pattern we don't interact with a object directly, Instead, we use a proxy object that intercepts the request, and modifies the properties if required of the target **object**

- The internal proxy pattern of javascript handles the whole get() set() property automatically.
- Proxy pattern is more efficient and easier to manage. 

- [Javascript Patterns](https://javascriptpatterns.vercel.app)

```javascript
const personProxy = new Proxy(person, {
  get: (target, prop) => {
    return target[prop];
  },
  set: (target, prop, value) => {
    // we can add validation here.
    // if(prop === "age") {
    // check if that user is eligible.
    //}
    target[prop] = value;
    // as long as we don't return a falsy value here like [0, undefined, null, "", -0, NaN] the set Method will modify the target object.
    return true;
    /*
    if we use reflect instead like 
    Reflect.set(target, property, value) --- in this case there is no explicit need to return true, it will be handled by javascript. 
    */
  },
});
```

# Observer Pattern

## Definition: 
An observable object which can be observed by its subscribers in order to notify them when an event or a trigger occurs, 

- It doesn't care about the subscribers or what they do with the notification or data sent by observer, 
- Example Logger

**The Observer can be created using singletion pattern, because observable object is a unified object, made to complate a single task.** 

- Its not tightly coupled, for example a component/subscriber doesn't need functionalities, or need to subscribe to observer object, we can easily remove it which improves **Decoupling structure**
- Its only suitable when the number of subscribers are less, otherwise we get performance overheads. 


 4
