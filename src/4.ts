class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: object[] = [];
  public door: boolean = false;
  constructor(protected key: Key) {}

  public abstract openDoor(myKey: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  openDoor(myKey: Key): void {
    if (myKey.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else this.door = false;
  }
}


const key = new Key();
  
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());


house.comeIn(person);

export {};
