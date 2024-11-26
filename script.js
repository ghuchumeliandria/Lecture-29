// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce (){
//         console.log(`hello , my name is ${this.name}, ${this.age} Years old`);

//     }
// }

// let person = new Person("Andria" , 20)
// person.introduce()
// ravi azri amis gamochenas
// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`hello , my name is ${this.name}, ${this.age} Years old`);
  }
  static isAdult(age) {
    return age >= 18;
  }
}

let person = new Person("Andria", 20);
person.introduce();
console.log(Person.isAdult(20));

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`ეს ${this.name} ლაპარაკობს`);
  }
}

class Dog extends Animal {
  constructor(name, woof) {
    super(name);
    this.woof = woof;
  }
  speak() {
    console.log(`this ${this.name} says ${this.woof}`);
  }
}

let animal = new Dog("Dzagli", "Yefs");
animal.speak();

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }
  render() {
    let button = document.createElement("button");
    button.style.color = this.color;
    button.textContent = this.label;
    let div = document.getElementById("div");
    div.appendChild(button);
  }
}

let frstButton = new Button("Button", "Blue");
let secondButton = new Button("Button", "Yellow");
frstButton.render();
secondButton.render();
// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  describe() {
    // console.log(`ეს არის ${this.brand} მარკის ე36 , რომელშიც გასვაპულია LSX 6.9 კომპრესორი და მაქსიმალური სიჩქარე აქვს ${speed} km/h `)
  }
}
class Car extends Vehicle {
  constructor(brand, speed, model) {
    super(brand, speed);

    this.model = model;
  }

  describe() {
    console.log(
      `ეს არის ${this.brand} მარკის ${this.model} , რომელშიც გასვაპულია LS3 7.2  და მაქსიმალური სიჩქარე აქვს ${this.speed} km/h `
    );
  }
}
let car = new Car("BMW", 250, "E92");
car.describe();
// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  static filterByCategory(name, category, price) {
    if (category.includes("electronics")) {
      console.log(`ამ ${name} ს ფასი ${category} კატეგორიიდან  არის  ${price}`);
    }
  }
}
let product1 = Product.filterByCategory("სამწვადი", "electronics", 16);
let product2 = Product.filterByCategory("ყველი", "electronics", 8);
let product3 = Product.filterByCategory("ვაშლი", "ხილი", 16);
let product4 = Product.filterByCategory("ბანანი", "ხილი", 16);

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

class Event {
  constructor(name, date) {
    this.name = name;
    this.date = date
  }
  isUpcoming(){
    if(this.date === "1 დეკემბერი"){
    console.log(`${this.name} ეს ღონისძიება რომელიც გაიმართება ${this.date} მომავალშია`)
    }else{
        console.log(`${this.name} ეს ღონისძიება უკვე იყო `)
    }
  }
}
let event = new Event("King Of Drift" , "1 დეკემბერი")
event.isUpcoming()

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

class Character{
  constructor(name , health){
    this.name = name;
    this.health = health
  }

}

class Warrior extends Character{
  constructor(name,health){
    super(name,   
      health)
  }
    attack(damage ){
      return this.health - damage
    }
  }

  let Warrior2  = new Warrior("Asteroidi", 70)
  let Warrior1 = new Warrior("Grusha" , 60)
  let attack1 = Warrior1.attack(10) 
  let fight = `${Warrior2.name} Attacks ${Warrior1.name} And Now ${Warrior1.name} Health is ${attack1} `
 console.log(fight)
// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

  class Task {
    constructor(title,completed, priority){
      this.title = title;
      this.completed = completed
      this.priority = priority
    }

    toggleCompleter(){
      
    }

    filterByPriority(tasks, priority){

    }
  }

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.

class Appointment {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
    isToday() {
        
        if(this.date === "დღეს"){

            console.log(`${this.title} ღონისძიება ${this.date}  გაიმართება`);
            return true;
    }else{
        return false
    }
  }
}
  let app = new Appointment("GDS", "დღეს");
  console.log(app.isToday());