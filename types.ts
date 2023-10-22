const date = new Date();

date.toISOString();

let string = "this is a string"; // type inference
// Typescript tries to figure out what type of value a variable refers to
// Type inference only when we do variable declaration and initialization on the same line

string.toLowerCase();

let number: number = 1; // type annotation
//Code we add to tell Typescript what type of value a variable will refer to

number.toString();

const bool = true;

bool.valueOf();

const object: { string: string; number: number } = {
  string: "value",
  number: 1,
};

object.string;

const colors: string[] = ["red", "green", "blue"];

const manufacturers: string[][] = [["toyota"], ["chevy"], ["mitsubishi"]]

const drink: [string, boolean, number] = ["pepsi", true, 50] // name, carbonated, sugar. An example of a tuple. One possible use case of tuples is when it comes to functionality involving CSV files

const logNumber = (num: number): void => {
  console.log(num);
};

const logObject = ({
  //annotation with destructuring
  string,
  number,
}: {
  string: string;
  number: number;
}): void => {
  console.log({ string, number });
};

const geography: any = {
  coordinates: {
    lat: 52,
    lon: 12,
  },
};

const {
  coordinates: { lat, lon },
}: { coordinates: { lat: number; lon: number } } = geography;

lat.toString();

class Car {
  origin: string;

  constructor(demonym: string) {
    this.origin = `this is a ${demonym} made car`;
  }

  drive() {
    console.log("driving...");
  }
}

const audi = new Car("German");

audi.origin;

audi.drive();

let hasAccount: boolean | string = false;

if (true) hasAccount = "INBSOSNIWI330333QNV";


type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

const result: number = add(10, 5);

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};