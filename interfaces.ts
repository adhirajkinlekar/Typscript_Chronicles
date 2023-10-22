interface Vehicle { // When we create an interface we are basically creating a new type
  name: string,
  model: string,
  year: number,
  drive(): string
}

const myCar: Vehicle = {
  name: "civic",
  model: "XR",
  year: 2023,
  drive(): string {
    return "driving..."
  }
}

interface Bike {
  geared: boolean,
  name: string
}

const ride = (bike: Bike): void => {
  console.log(`riding ${bike.name}`);
}

const bike = {
  geared: true,
  name: "Yamaha",
  year: 1995
};

ride(bike);