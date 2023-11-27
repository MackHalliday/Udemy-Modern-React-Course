# Notes for Modern React Course

# What is React?

- Display HTML for users and changes HTML as user does something
- React is a 'wrapper' around HTML.
- JSX is not valid JavaScript code.
- Dev Server: Runs Babel and Webpack which creates a bundle.js file. bundle.js contains all Javascript code.

## How does a React App start up?

- App makes request and Server responses with index.html file. index.html file loaded in browser. index.html contains additional scripts to load additional code for React app.
- App makes second request to Server and gets bundle.js file. bundle.js references 'root' div.
- React takes control of 'root' div.

# Creating Content with JSX

## Rules for Converting HTML to JSX

1. All prop names follow camelCase
2. Number attributes use curly braces
3. Boolean 'true' can be written with just the property name. 'False' should be written with curly braces.
4. The 'class' attribute is writen as className.
5. In-line syles are provided as objects.

## Module System Overview

- Import/Export system allow modules to share variables
  Basic Rules

1. Export statements make variables to other file

- default export: only one export per file. Default exports can be renamed in the importing file. Example `export default App`
- named export: use when exporting multiple variables, can have as maany named export as we want. Example with export and import `export const message = 'hi'` / `import {message} from './App`.

2. No `./` means imported from library. Example `import React from react`

3. `../` denotes how far 'unnested' the file is

[JSX Cheatsheet for Section 2](https://jsx-notes.vercel.app/#Returning%20JSX)

# Building with Reusable Components

## Prop System

1. Pass data from parent component to child component
2. Allows a parent to configure each child differently
3. ONE WAY FLOW

## Destructing

Example `const {title, handle} = props; ` OR more likely `ProfileCard({title, handle})`

- Create variables for all props values
- Good since you do not always need all values from props

## Adding Images

- If image is less than 9.7 kb, served as base64 encoded
- If image is greater than 9.7 kb served as seperate file
- Add attribute `alt="name of image"` to get rid of error for screen reader

# State: How to change your app

## Using Events Steps

- "I'd like to run some code when a user does something"
- Events can be listened for by adding prop to component, like ` <button onClick={handleClick}/>`

1. Decide what event you'd like to watch for
2. Create a function, called usually a handler or a callback. Function called by another piece of code
3. Name the function using pattern of handle + EventName. Example `handleClick`, `handleScroll`, `handleMouseUp`, `onClick`, `handleButtonClick`
4. Pass function as a prop to a plain element. Example
   `button onClick={handleClick} />`
5. Make sure you pass using valid event name to child
6. Make sure pass event in as reference. Example `handleClick` NOT `handleClick()`

## What is State?

- "I'd like to change something on the screen"
- Data that change as the user interacts with out app
- When this data changes, React will update content on the screen
- This is the one-and-only way we change content

## Using State in App

1. Assign state a top of component function with useState function
2. Give a value to the useState function. This is the DEFAULT value.
3. Use the state in some way in our component. Use setter function.
4. When user does something, update the piece of state. Causes "rerender".

## What is an Array Destructuring?

- useState returns a variable and method to change variable (setting function)

# Using an API with React

## Data Flow

- 'Sibling' components cannot directly communicate with one another
- Share info between sibling thru parent component
- Use prop system to communicate info from parent to child
- Child to parent communication
  - can use props thru event handlers
  - Example user searches term from a SearchBar component, event handler onSubmit defined in parent App component excutes the event

## Forms

- Forms have built in event handlers that 'listen' for Enter/Submit Event
- Collects all elements on the form and creates a string. Example a Form that collects email and password will create the string `myapp.come?email=test@email.com&password=password123` and submit a network event
- To prevent network event, pass `event` into event handler and include the code `event.preventDefault();`

## Handle Text Input

1. Create a new piece of state
2. Create event handler to watch for the onChange event
3. When the onChange event fires, get the value from the input
4. Take that value from the input and use it to update your state
5. Pass your state to the input as the value prop

### Example

```
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("default text!");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
```

### Why?

1. Allows React to interact with input
2. Allows error messages
3. Allows validation

## Async and Await on API

- Need to use async and await to tell React to wait until API call completed

### Example below

```
import SearchBar from "./components/SearchBar";
import searchImages from "./api.js";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  // SEE ASYNC AND AWAIT HERE!
  const handleSearch = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

```

## Requirements for Keys

1. Use whenever we have a list of elements (everytime using map)
2. Add the key to the top-most JSX element in the list. In example below `key={image.id}` in on the `<div>` not the `<ImageShow />`
3. Must be a string or number
4. Should be unique for this list
5. Should be consistent across renders

### What to use as keys

- Usually use database index for ID
- ID given by API response
- Can use index from `.map` - NOT IDEAL

### Example

```
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });
  return <div> {renderImages} </div>;
}

export default ImageList;
```

# How to Handle Forms

## State Location

- Find the lowest common parent of components that share state

### Example

- An App that allows to create and list books
- State would be stored in the parent component of BookCreate and BookList

## Basic Form Example

- Form that can create a Book with a title on submit
- Note functions for handleSubmit and setTitle
- **Use `event.preventDefault()` to stop form from submitting when user types in input box**

```
import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          placeholder="Enter title of book"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="buttom" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
```

## Modifying State for Arrays

- React ONLY re-renders if state different from current value

### Bad code for modifying state

"Current" value does not differ from "new" value
- BAD! Push modifies an array (**See example below**)
- BAD! Modifying an element
- BAD! Nodifying a property
  
**BAD**
```
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
      books.push(title)
      console.log("books", books);
      setBooks(books)
    };
  ...
}
```

### Good code for modifying state
- OK! Creating "new" array to update state (**See example below**)
- ALSO OK! Mutating object but it isn't being used as state
- ALSO OK! Mutating array but it isn't being used as state

**GOOD**
```
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, title]);
    console.log("books", books);
  };
  ...
}
```

### [See Cheat Sheet for Updating State Here](https://state-updates.vercel.app/)

### Insert or remove item from array
- Have to create new array to update state
- Use `.slice` with index to add item in middle of array
- Use `.filter` - filter for desired value or filter out value if using `!==`
  - `colors.filter((color, index) => {return color == "green"});` -> Return all green
  - `colors.filter((color, index) => {return index !== 1});` -> Return all NOT index of 1