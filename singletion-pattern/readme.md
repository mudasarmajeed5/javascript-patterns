# Singeltion Pattern in Javascript
## Can be created with class. 

singletion instantiation 
only one instance should exist

if not then we should throw an error. 

no part of the application should be able to modify the instance..

can be done by 
```javascript

object.freeze
```

We should always import the instance not the class Itself,

```javascript
// now instances can be created via objects only like 
export const obj = {
    objectProperties:{}, 
    data: {}
}
```

### CONS
- Maybe a singeltion is importing another module and we don't know about that. (so we could be modifying the object without knowing)
- one single change in singeltion class, can break the application sometimes, if not **used right**

