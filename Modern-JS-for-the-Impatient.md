# Reading Notes

## 4 Object-Oriented Programming  
    1 Methods
    class
```js
let harry = { name: 'Harry Smith', salary: 90000 }

harry = {
    name: 'Harry Smith',
    salary: 90000,
    raiseSalary: function(percent) {    // raiseSalary(percent)
        this.salary *= 1 + percent / 100
    }
}

harry.raiseSalary(10)
```
    2 Prototypes
```js
// each object has its own property
function createEmployee(name, salary) {
    return {
        name: name,
        salary: salary,
        raiseSalary: function(percent) {
            this.salary *= 1 + percent /100
        }
    }
}
=====
const employeePrototype = {
    raiseSalary: function(percent) {
        this.salary *= 1 + percent / 100
    }
}

// objects share the same prototype
function createEmployee(name, salary) {
    const result = { name, salary }
    Object.setPrototypeOf(result, employeePrototype)
    return result
}
```    
    3 Constructors
    4 Class syntax
    5 Getters and Setters
    6 Instance Fields and Private Methods
    7 Static Methods and Fields
    8 Subclasses
    9 Overriding Methods
    10 Subclass Construction
    11 Class Expressions
    12 The this Reference
