//module wrapper function
(function(require,exports,module,__filename,__dirname) {
    
})
console.log(__dirname,__filename)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name}, and I am ${this.age} years old`)
    }
}

module.exports = Person