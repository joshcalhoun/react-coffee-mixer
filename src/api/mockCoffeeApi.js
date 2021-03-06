const delay = 100;
const coffees = [
  {
    "id": "veranda",
    "name": "Veranda",
    "roast": "blonde",
    "amount": 12
  },
  {
    "id": "frenchRoast",
    "name": "French Roast",
    "roast": "dark",
    "amount": 8
  },
  {
    "id": "sumatra",
    "name": "Sumatra",
    "roast": "dark",
    "amount": 4
  },
  {
    "id": "pikesPlace",
    "name": "Pikes Place",
    "roast": "medium",
    "amount": 6
  },
  {
    "id": "casiCielo",
    "name": "Casi Cielo",
    "amount": 0
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "roast": "espresso",
    "amount": 2
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
          reject(`Name must be at least ${minCoffeeTitleLength} characters.`);
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
          coffee.id = coffee.name.replace(/ /g, '').toLowerCase();
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
