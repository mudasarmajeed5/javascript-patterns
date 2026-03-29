import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (target, prop) => {
    return `${new Date()} | The value of ${prop} is ${Reflect.get(
      target,
      prop
    )}`;
  },
  set: (target, prop, value) => {
    if (prop === 'email') {
      if (!isValidEmail(value)) {
        throw new Error('Invalid Email');
      }
      return false;
    }
    if (prop === 'username') {
      if (value.length < 3) {
        throw new Error('User name is too short');
      } else if (!isAllLetters(value)) {
        throw new Error('Username can only contain letters');
      }
    }
    if (prop === 'age') {
      if (value < 18) {
        throw new Error('Age can not be less than 18');
      }
    }
    return Reflect.set(target, prop, value);
  },
});
console.log(userProxy.username)
console.log((userProxy.username = 'mudasarmajeed'));
