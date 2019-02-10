# Search Contacts - JS

A simple MDN project to search through an array based on strings you enter.
The objective is to provide a field for user to enter the name of a contact they
want to find the number for.  
If the user exists, the number will be shown, else they will be notified of non-existence.

[Visit MDN Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

## Documentation
The project took me a total of: **4 Hours** to complete.

### HTML Overview
Here we've got 3 sections.
1. We have a `Header` section that contains the Page title and a short description about it.
2. We have a `Available Contacts` section. This lists the available contacts in the backend.
The list is loaded dynamically to a `<table>` element.
3. We have a `Search` section. This lists the `input` element for the user to enter the name to look for. A `<button>` element to indicate they want to search and a `<p>`element to display the results of the search.


### CSS Overview
Here we first position the content to load at the centre of the page.  

We style the `<table>` element with the following:
  - table heading to have a unique background colour.
  - We add some padding and a bottom-border to the table cells.
  - We add a unique background colour when you hover over a table cell.

We also make the label to have a block property.
We increase the padding and width of the `<input>` element.  
We add unique background colours to the button including when hovered over.  

Finally we add two class styles `.search-result-good` and `.search-result-bad` to display the search results.



### JS Overview
In the JavaScript, we are storing a reference to:  
1. Phone contacts saved in an array
2. `<table>` element
3. `<input>` element
4. `<button>` element
5. `<p>` element


We have three (3) functions in the code: `getContacts()`, `splitPhoneContacts()` and the `searchContacts()`.

Once the script is executed, the `.getContacts()` is loaded.  
Also, we have an `.addEventListener()` function that monitors the `<button>` element's `click` property.  

#### How the getContacts() works
When this function is run, it executes a `.for() {}` loop.  
It creates two(2) variables that either inserts a row and a cell per row in the `<table>` row.
It adds the name of a phone contact in a cell per row.


#### How the splitPhoneContacts( array ) works
For this function to run, it needs an array with strings joined with a ':' full colon.

This function creates a new array that saves each contact separately based on the `.split()` function.


#### How the searchContacts() works
For this function to run, it saves the value from the `<input>` element's value.
It also resets the value of the `<input>` element and also the `.focus()` function.

It finally goes through the `.splitPhoneContacts()` output array and compares the saved value against it.
If the existing contacts array is equal or includes content from the saved value, the search result will be updated with the contact's phone number.
Else the function notifies the user the contact is not in the database.
