/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {


  constructor(public name: string,private department: string,protected salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name:string,department: string, salary: number){
    super(name,department,salary)
    this.salary +=10000
  }
 
  
}



interface ICharacter{
  name: string,
  level: number,
  introduce(phrase: string):void,
  levelUp():void
}

interface ISpellCaster{
  castSpell():void
}







// реалізація класу Wizard
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16

export {};