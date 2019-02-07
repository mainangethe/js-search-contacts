const phoneContactsArray =
[
  'Alex Kimani: 0722242459',
  'Beti Maina: 0722943579',
  'Francis Mullomi: 0722896217',
  'Michael Maina: 0723106659',
  'Tanayian Makrita: 431539382'
];
const tableElement = document.getElementById('availableContacts');
const inputElement = document.getElementById('searchField');
const buttonElement = document.getElementById('searchButton');
let searchResult = document.getElementById('searchResult');
let contacts = splitPhoneContacts(phoneContactsArray);

function getContacts() {
    for (i = 0; i < contacts.length; i++) {
    let tableRow = tableElement.insertRow(i+1);
    const cell1 = tableRow.insertCell(0);
    cell1.innerHTML = contacts[i][0];
  }
}

function splitPhoneContacts (contactsArray) {
  let contactDetails = [];
  for (i = 0; i < contactsArray.length; i++) {
    contactDetails.push(contactsArray[i].split(':'));
  }
  return contactDetails;
}

function searchContacts() {
  let searchEntry = inputElement.value;

  // Reset the field and add focus to it
  inputElement.value = '';
  inputElement.focus();

  for (i = 0; i < contacts.length; i++) {
    if (contacts[i][0].includes(searchEntry)){
      searchResult.className ='search-result-good';
      searchResult.textContent = contacts[i][0] + contacts[i][1];
      break;
    }
    else {
      searchResult.className ='search-result-bad';
      searchResult.textContent = `We did not find anyone with the name: '${searchEntry}'.`
    }
  }
  searchResult;
}

buttonElement.addEventListener('click', searchContacts);
getContacts();
