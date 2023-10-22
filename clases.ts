class Animal {
  sound:string;
  constructor(sound:string){
    this.sound = sound
  }
  protected makeSound():void{
    console.log(`${this.sound}...`)
  }
}

class Dog extends Animal {

  constructor(sound:string){
    super(sound);
  };
  
  reactToBeingPet(){
    this.makeSound();
    console.log("wag tail...")
  };
}

const doggy: Dog = new Dog("bow bow");

//doggy.makeSound();// not allowed
doggy.reactToBeingPet();

const animal:Animal = new Animal("bow bow");

//animal.makeSound() //not allowed

