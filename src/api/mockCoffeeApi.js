const delay = 100;
const coffees = [
  {
    "id": "veranda",
    "name": "Veranda",
    "amount": '0',
      "appearance": "#331900"
  },
  {
    "id": "frenchRoast",
    "name": "French Roast",
    "amount": '0',
      "appearance": "#38190d"
  },
  {
    "id": "sumatra",
    "name": "Sumatra",
    "amount": '0',
      "appearance": "#43150d"
  },
  {
    "id": "pikesPlace",
    "name": "Pikes Place",
    "amount": '0',
      "appearance": "#351511"
  },
  {
    "id": "casiCielo",
    "name": "Casi Cielo",
    "amount": '0',
      "appearance": "#461c0d"
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "amount": '0',
      "appearance": "#2e1212"
  }
];

class CoffeeApi {
  static getAllCoffees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], coffees));
      }, delay);
    });
  }

  static saveCoffee(coffee) {
    coffee = Object.assign({}, coffee); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCoffeeTitleLength = 1;
        if (coffee.name.length < minCoffeeTitleLength) {
          reject(`Title must be at least ${minCoffeeTitleLength} characters.`);
        }

        if (coffee.id) {
          const existingCoffeeIndex = coffees.findIndex(a => a.id === coffee.id);
          coffees.splice(existingCoffeeIndex, 1, coffee);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new coffees in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          // coffee.id = generateId(coffee);
          // coffee.watchHref = `http://www.pluralsight.com/coffees/${coffee.id}`;
          coffees.push(coffee);
        }

        resolve(coffee);
      }, delay);
    });
  }

  static deleteCoffee(coffeeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCoffeeToDelete = coffees.findIndex(coffee => {
          return coffee.id === coffeeId;
        });
        coffees.splice(indexOfCoffeeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CoffeeApi;
