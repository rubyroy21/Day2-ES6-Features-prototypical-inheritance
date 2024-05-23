// Problem statement 1

function CreateProduct1(product_name, brand, reviews, price, rating) {
  let product = Object.create(CreateProduct1.prototype);
  product.product_name = product_name;
  product.brand = brand;
  product.reviews = reviews;
  product.price = price;
  product.rating = rating;
  return product;
}

CreateProduct1.prototype.getPrice = function () {
  return this.price;
};

CreateProduct1.prototype.increasePrice = function (amount) {
  this.price += amount;
  return this.price;
};

CreateProduct1.prototype.decreasePrice = function (amount) {
  this.price -= amount;
  return this.price;
};

CreateProduct1.prototype.isExpensive = function () {
  return this.price >= 1000;
};

// Problem statement 2

function CreateProduct2(product_name, brand, reviews, price, rating) {
  this.product_name = product_name;
  this.brand = brand;
  this.reviews = reviews;
  this.price = price;
  this.rating = rating;
}

CreateProduct2.prototype.getPrice = function () {
  return this.price;
};

CreateProduct2.prototype.increasePrice = function (amount) {
  this.price += amount;
  return this.price;
};

CreateProduct2.prototype.decreasePrice = function (amount) {
  this.price -= amount;
  return this.price;
};

CreateProduct2.prototype.isExpensive = function () {
  return this.price >= 1000;
};

// Problem statement 3

class CreateProduct3 {
  constructor(product_name, brand, reviews, price, rating) {
    this.product_name = product_name;
    this.brand = brand;
    this.reviews = reviews;
    this.price = price;
    this.rating = rating;
  }

  getPrice() {
    return this.price;
  }

  increasePrice(amount) {
    this.price += amount;
    return this.price;
  }

  decreasePrice(amount) {
    this.price -= amount;
    return this.price;
  }

  isExpensive() {
    return this.price >= 1000;
  }
}

// Problem statement 4

function findTotal(arr) {
  return arr.map((student) => {
    let total = student.subjects.reduce((acc, subject) => {
      let mark = Object.values(subject)[0];
      return acc + parseInt(mark, 10);
    }, 0);
    student.total = total;
    return student;
  });
}

// Problem statement 5

function removeKeyValuePair(user, keyToRemove) {
  const { [keyToRemove]: _, ...remaining } = user;
  return remaining;
}

// Problem statement 6

function massageArray(inputArray) {
  let areas = [
    { id: 1, name: "British" },
    { id: 2, name: "Malaysian" },
  ];

  let categoriesDirectory = {
    3: "Dessert",
    1: "MainCourse",
    2: "Starter",
  };

  return inputArray.map((item) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      let ingredient = item[`strIngredient${i}`];
      let measure = item[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }

    return {
      productId: item.idMeal,
      productTitle: item.strMeal,
      Category: categoriesDirectory[item.Category],
      Area: areas.find((area) => area.id === item.Area).name,
      Ingredients: ingredients,
    };
  });
}
