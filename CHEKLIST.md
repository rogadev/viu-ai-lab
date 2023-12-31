# Lab Checklist

Ensure each of these steps is completed as you build your Next.js web application:

## TODO Tree VSCode Extension

You may find it helpful to install the [TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) extension for VSCode. This extension will allow you to see all the TODOs in your project in a tree view. Mark these off as you go by changing `[ ]` to `[x]`.

- [x] Install the TODO Tree extension.

You can also add your own TODOs to the tree by adding a comment with the word `TODO` in it anywhere in your project to remind yourself to come back to it later.

_e.g., `// TODO: Add a button to submit text for processing.`_

## Text Parsing and JSON Conversion with AI

- [ ] Understand the `Trip` schema.
- [ ] Set up your [OpenAI API integration](https://platform.openai.com/docs/introduction).
- [ ] Implement text input functionality.
- [ ] Create logic to parse the text [using AI](https://platform.openai.com/docs/guides/text-generation/chat-completions-api) and extract key information.
- [ ] Transform extracted information into JSON format.
- [ ] Add functionality to review and edit JSON data for accuracy before saving.
- [ ] Save the finalized data to a database.

## Creating a Next.js Application

### Input View

- [ ] Create a text box for inputting plain text.
- [ ] Implement a button to submit text for processing.

### Data Editing View

- [ ] Display the JSON data converted from text.
- [ ] Ensure the JSON data is editable.
- [ ] Validate edited data to match the `Trip` schema.

### Database Submission

- [ ] Set up a database for storing JSON data.
- [ ] Develop functionality to submit corrected data to the database.

### Data Display View

- [ ] Implement a view to show all submitted data.
- [ ] Include delete options for each data entry.

## Final Checks

- [ ] Test the entire flow of the application.
- [ ] Ensure data is accurately parsed, displayed, editable, and storable.
- [ ] Validate all user inputs and error handling.
- [ ] Review the application for usability and design.

Once all items are checked, your application is ready for deployment!
