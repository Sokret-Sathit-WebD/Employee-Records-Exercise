// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
    
// }

// var lc = new Car("Toyota", "Land Cruiser", 1989, "BOOONM")
// var tundra = new Car("Totota", "Tundra", 2022, "VROOMVROOM")

// Car.prototype.honk = function() {
//     console.log(this.honkSound)
// }

// lc.honk()
// tundra.honk()

//You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`



//Next, you will create an Employee constructor with the first three 
//attributes defined at the time of instantiation and the fourth will 
//be defaulted to "Full Time".
// function Employees(name, jobTitle, salary, status) {
//     this.name = name
//     this.jobTitle = jobTitle
//     this.salary = salary
//     this.status = status
// }

// console.log(employee0)


const employees = [];

function Employee(name, title, salary, status) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status // "Full time" or "Part time"
    this.printEmployeeForm = function() {
        console.log(this.name + ", " + this.title +", "+ this.salary +", "+ this.status);
    };
}

var Vito = new Employee("Vito", "The Don", "$7,000,000/year", "Full Time")
var Micheal = new Employee("Bob", "The new Don", "21,000,000/year", "Full Time")
var Fredo = new Employee("Bob", "Second Oldest", "$3000/year", "part Time")
var Tom = new Employee("Tom", "consigliere", "3,000,000/year", "Full Time")


Vito.printEmployeeForm()
Micheal.printEmployeeForm()
Fredo.printEmployeeForm()
Tom.printEmployeeForm()
