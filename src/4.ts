


class Key{
  private signature : number = Math.random()
  constructor(){

  }
  getSignature():number{
          return this.signature
      }
  }
  
  class Person {
  private key:{};
  
    constructor(key:{}){
      this.key = key
    }
  
    getKey():{}{
      return this.key
    }
  
  }
  
  abstract class House{
    private tenants : object[] = []
    public door:boolean = false
    private key:{}
    constructor( private myKey:{}){

      this.key = myKey

    }
   
  
    public abstract openDoor(myKey:number):void;

    comeIn(person : {}) : void{
      if(this.door){
  this.tenants.push(person)
      }
    }
  }
  
  
  class MyHouse extends House{
   openDoor(myKey: {}){
   
    if(myKey === key){
      this.door = true
      }
  }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  house.openDoor(person.getKey());

  house.comeIn(person);


export {};