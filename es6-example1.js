"use strict";

console.log('ES6 classes, example one: just a Dog');

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + ' barked.');
  }
}

var dog = new Dog("Roma");
dog.bark();
