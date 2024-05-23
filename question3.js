// Problem statement 9-1

class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(character) {
    character.health -= this.attackPower;
  }

  isAlive() {
    return this.health > 0;
  }
}

// Problem statement 9-2

class Warrior extends Character {
  constructor(name, health, attackPower, weapon, armor) {
    super(name, health, attackPower);
    this.weapon = weapon;
    this.armor = armor;
  }

  attack(character) {
    const extraPower = this.weapon === "sword" ? 10 : 0;
    character.health -= this.attackPower + extraPower;
  }

  defend() {
    this.health += 10;
  }
}

// Problem statement 10

class Media {
  #mediaType;

  constructor(mediaType) {
    this.mediaType = mediaType;
  }

  get mediaType() {
    return this.#mediaType;
  }

  set mediaType(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Media type must be a non-empty string.");
    }
    this.#mediaType = value;
  }
}

class Book extends Media {
  #title;
  #author;
  #publicationYear;
  #availableCopies;

  constructor(title, author, publicationYear, availableCopies) {
    super("Book");
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.availableCopies = availableCopies;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Title must be a non-empty string.");
    }
    this.#title = value;
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Author must be a non-empty string.");
    }
    this.#author = value;
  }

  get publicationYear() {
    return this.#publicationYear;
  }

  set publicationYear(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Publication year must be a positive number.");
    }
    this.#publicationYear = value;
  }

  get availableCopies() {
    return this.#availableCopies;
  }

  set availableCopies(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Available copies must be a non-negative number.");
    }
    this.#availableCopies = value;
  }

  static comparePublicationYears(book1, book2) {
    return book1.publicationYear - book2.publicationYear;
  }
}

class User {
  #firstName;
  #lastName;
  #borrowedBooks = [];

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("First name must be a non-empty string.");
    }
    this.#firstName = value;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Last name must be a non-empty string.");
    }
    this.#lastName = value;
  }

  borrowBook(book) {
    if (book instanceof Book && book.availableCopies > 0) {
      this.#borrowedBooks.push(book);
      book.availableCopies--;
    } else {
      throw new Error("Cannot borrow the book.");
    }
  }

  returnBook(book) {
    const index = this.#borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.#borrowedBooks.splice(index, 1);
      book.availableCopies++;
    } else {
      throw new Error("Book not found in borrowed books.");
    }
  }

  get borrowedBooks() {
    return this.#borrowedBooks;
  }
}
