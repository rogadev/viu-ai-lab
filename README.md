# Lab Overview

## **Text Parsing and JSON Conversion with AI**

**Objective:** Use the OpenAI API to convert plain text into structured JSON data that fits the `Trip` schema.

### Steps:

1. **Understand the Trip Schema:**
   - The `Trip` type includes fields like `name`, `fromAddress`, `toAddress`, `pickupTime`, `dropoffTime`, `phone`, `wheelchair`, and `additionalNotes`.
   - Each field represents specific information, e.g., `name` for the person's name, `fromAddress` for the pickup location.
2. **Process the Text:**
   - Input the plain text (like the sample provided) into your application.
   - Use the OpenAI API to analyze this text.
3. **Identify Key Information:**
   - The AI should recognize patterns and pick out important details: names, addresses, phone numbers, and times.
4. **Create JSON Objects:**
   - Transform the extracted information into JSON format, ensuring it aligns with the Trip type structure.
   - For example, the AI might extract "Edward Greenwood" as a name, "1562 Marina Way Nanoose Bay" as a fromAddress, etc.
5. **Verify and Edit:**
   - After conversion, you should be able to review and edit the JSON data for accuracy before saving the data to a database.

**Outcome:** You will transform unstructured text into structured JSON data, ready for further use in your application.

## Creating your Next.js Application

**Objective:** Build a web application using Next.js that processes, displays, and manages the JSON data derived from text.

### Components of the Application:

1. **Input View:**
   - **Purpose:** To input and process text.
   - **Features:**
     - A text box where users paste the plain text.
     - A button to submit the text for processing by the AI.
2. **Data Editing View:**
   - **Purpose:** To review and edit JSON data.
   - **Features:**
     - Display the JSON data converted from the text.
     - Provide options to edit this data to fix any inaccuracies.
3. **Database Submission:**
   - **Purpose:** To store the finalized data.
   - **Features:**
     - A functionality to submit the corrected JSON data to a database.
4. **Data Display View:**
   - **Purpose:** To view and manage submitted data.
   - **Features:**
     - Show all the data that has been submitted to the database.
     - Include options to delete specific data entries if needed.

**Outcome:** You will create a full-fledged web application that not only processes and converts text to JSON but also allows for the management and storage of this data.

## Key Concepts and Challenges

1. **Regex and String Manipulation:** Students will need to use regular expressions and string manipulation techniques to extract structured data from unstructured text.

2. **Data Validation and Error Handling:** It's crucial to validate the extracted data and handle errors or inconsistencies in the input text.

3. **State Management:** Managing the state of the application, especially when dealing with user inputs and dynamic data display, is a fundamental aspect of this lab.

4. **Database Interaction:** Integrating a backend to store and retrieve data, and understanding how to interact with it from a Next.js application.

5. **User Interface Design:** Considering usability and functionality in the design of the input and data display views.

6. **TypeScript Usage:** Effectively using TypeScript to ensure type safety and improve code quality.

## TypeScript Schema Explanation

For the `Trip` type schema you provided, here's a brief explanation suitable for your students:

```ts
type Trip {
  name: string,             // The name of the person being transported.
  fromAddress: string,      // The address where the person will be picked up.
  toAddress: string,        // The destination address.
  pickupTime?: Date,        // Optional. The time the person will be picked up.
  dropoffTime?: Date,       // Optional. The time the person will be dropped off.
  phone?: string,           // Optional. The phone number of the person or relevant contact.
  wheelchair: boolean,      // True if the person requires a wheelchair, false otherwise.
  additionalNotes?: string  // Optional. Any additional notes or instructions.
}
```

Each field in this type corresponds to a specific piece of data that needs to be extracted from the input text. Emphasize the importance of correctly mapping the parsed data to these fields.

## Conclusion

This lab not only teaches technical skills related to web development but also imparts valuable lessons in data processing and user interface design. It's a practical exercise that closely mirrors real-world scenarios where developers often deal with transforming and displaying data in user-friendly formats.
