// Problem statement 7-1

function findDetails(foodDeliveryService) {
  const {
    restaurants: {
      italianCorner: {
        menu: {
          pizza: { available: pizzaAvailable, price: pizzaPrice },
        },
      },
      burgerJoint: {
        menu: {
          burger: { available: burgerAvailable, price: burgerPrice },
        },
      },
    },
  } = foodDeliveryService;

  return { pizzaAvailable, burgerAvailable, pizzaPrice, burgerPrice };
}

// Problem statement 7-2

function calculateTotalRevenue(foodDeliveryService) {
  let totalRevenue = 0;
  for (const restaurantName of foodDeliveryService.restaurantNames) {
    const restaurant = foodDeliveryService.restaurants[restaurantName];
    for (const order of restaurant.orders) {
      totalRevenue += order.total;
    }
  }
  return `Total Revenue: ${totalRevenue}`;
}

// Problem statement 8

function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  return {
    fullName: `${firstName} ${lastName}`,
    age: age,
    hobbies: hobbies,
    getInfo: function () {
      return `${this.fullName}'s age is ${this.age}.`;
    },
    getResult: function () {
      const average = marksArray.reduce((a, b) => a + b, 0) / marksArray.length;
      return `Result: ${average >= 50 ? "PASS" : "FAIL"}`;
    },
  };
}
