# My Address Book

Welcome to My Address Book, a simple web application for creating, viewing, and managing contacts. This project demonstrates the use of JavaScript constructors and prototypes for business logic, test-driven development (TDD) with Jest, and a modern, responsive UI.

## Table of Contents

Features

Demo

Getting Started

Prerequisites

Installation

Usage

Business Logic

Contact Constructor

AddressBook Prototype Methods

Project Structure

Testing

Setup Jest

Running Tests

Future Improvements

Contributing

Link

### Features

Add contacts with first name, last name, phone number, and email.

View details in a modal dialog for each contact.

Delete contacts from the list.

Constructor & prototype patterns separate business logic from UI logic.

Test-driven development with Jest ensures reliability of core methods.

Responsive design using CSS variables and modern layout techniques.

#### Demo



Open index.html in a modern browser to try it out.

#### Getting Started

#### Prerequisites

A modern web browser (Chrome, Firefox, Edge, Safari).

Node.js and npm (for running tests).

#### Installation

#### Clone the repository:

git clone https://github.com/yourusername/my-address-book.git
cd my-address-book

#### Install dependencies (for testing):

npm install

#### Open the app:

Double-click index.html, or

Serve with a simple HTTP server:

npx http-server .

#### Usage

Fill out the First Name, Last Name, Phone, and Email fields.

Click Add Contact to save it.

In the list, click View to open the details modal.

Click Delete to remove a contact.

#### Business Logic

Contact Constructor

function Contact(firstName, lastName, phone, email) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.phone     = phone;
  this.email     = email;
}

Each Contact instance holds the personal details of one contact.

#### ddressBook Prototype Methods

function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.add = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.removeAt = function(index) {
  this.contacts.splice(index, 1);
};

AddressBook.prototype.findByName = function(fullName) {
  return this.contacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase() === fullName.toLowerCase()
  );
};

These methods provide core operations: adding, deleting, and searching contacts by full name.

#### Project Structure

my-address-book/
├── index.html       # Main HTML page
├── styles.css       # CSS styling
├── app.js           # Business logic + UI interactions
├── README.md        # Project documentation (you are here)
└── tests/
    ├── contact.test.js       # Tests for Contact constructor
    └── addressBook.test.js   # Tests for AddressBook methods

#### Testing

We use Jest for writing and running unit tests against our business logic.

Setup Jest

Ensure your package.json contains:

{
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}

Install dev dependencies:

npm install --save-dev jest

#### Running Tests

Run all tests with:

npm test

#### Sample tests:

tests/contact.test.js

const { Contact } = require('../app.js');

describe('Contact', () => {
  test('initializes with given values', () => {
    const c = new Contact('Jane', 'Doe', '123-4567', 'jane@example.com');
    expect(c.firstName).toBe('Jane');
    expect(c.lastName).toBe('Doe');
    expect(c.phone).toBe('123-4567');
    expect(c.email).toBe('jane@example.com');
  });
});

tests/addressBook.test.js

const { AddressBook, Contact } = require('../app.js');

describe('AddressBook', () => {
  let book;
  beforeEach(() => { book = new AddressBook(); });

  test('add() stores a contact', () => {
    const c = new Contact('A', 'One', '111', 'a@one.com');
    book.add(c);
    expect(book.contacts).toContain(c);
  });

  test('removeAt() removes correct contact', () => {
    const c1 = new Contact('B', 'Two', '222', 'b@two.com');
    book.add(c1);
    book.removeAt(0);
    expect(book.contacts).not.toContain(c1);
  });

  test('findByName() returns matching contacts', () => {
    const c = new Contact('C', 'Three', '333', 'c@three.com');
    book.add(c);
    expect(book.findByName('c three')).toEqual([c]);
  });
});

#### Future Improvements

Persist data using localStorage or a backend API.

Edit contacts inline or via a modal form.

Search/filter the contact list in real-time.

Improve accessibility and keyboard navigation.

#### Contributing

Fork this repo.

Create a branch: git checkout -b feature/YourFeature.

Commit your changes: git commit -m "Add feature".

Push to branch: git push origin feature/YourFeature.

Open a pull request.

#### link
https://github.com/mohamedabdinasir1/ADDRESS-BOOK

