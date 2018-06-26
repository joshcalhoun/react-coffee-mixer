(function () {
  console.clear();
  var coffees = [
      'Veranda',
      'French Roast',
      'Sumatra',
      'Pikes Place',
      'Casi Cielo',
      'Espresso'
    ],
    mixQty = 0,
    mixData = {},
    counter = 0,
    coffeeTotal = 0;

  mixQty = Math.floor(Math.random() * coffees.length) + 1;


  for (counter = 0; counter < mixQty; counter += 1) {
    var mixIndex = Math.floor(Math.random() * coffees.length);
    var coffee = coffees.splice(mixIndex, 1);
    var thisCoffeeMix = Math.floor(Math.random() * 100) + 1;

    mixData[coffee] = thisCoffeeMix;
    coffeeTotal += thisCoffeeMix;
  }

  var msg = '';
  for (var coffeeEntry in mixData) {
    mixData[coffeeEntry] = ((mixData[coffeeEntry] / coffeeTotal) * 100).toFixed(0) + "%";
    msg += coffeeEntry + ': ' + mixData[coffeeEntry] + '\n';
  }

  alert(msg);
  return mixData;

})();
