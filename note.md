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
