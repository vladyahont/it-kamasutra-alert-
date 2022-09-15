function AlertFirstNameValue() {
  console.log(firstNameEl.value);
  console.log(firstNameEl.className);
}

function AlertLastNameValue() {
  console.log(lastNameEl.value);
  console.log(lastNameEl.className);
}

function AlertAddress() {
  console.log(addressEl.value);
  console.log(addressEl.className);
}

function AlertValues(elemParam) {
  console.log(elemParam.value);
  console.log(elemParam.className);
}

var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
AlertFirstNameValue();

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
AlertValues(lastNameEl);

var addressId = "address";
var addressEl = document.getElementById(addressId);
AlertAddress();

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
console.log(citiesEl.value);

var hobbisId = "hobbis";
var hobbisEl = document.getElementById(hobbisId);
console.log(hobbisEl.innerHTML);

var divId = "div";
var divEl = document.getElementById(divId);
console.log(divEl.innerHTML);

var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);
console.log(avatarEl.alt);

firstNameEl.value = "Tati";
lastNameEl.value = "Sorok";
addressEl.value = "Novo";

// function AlertValues(elemParam) {
//   console.log(elemParam.value);
//   console.log(elemParam.className);
// }

// var firstNameId = "first-name";
// var firstNameEl = document.getElementById(firstNameId);
// AlertValues(firstNameEl);

// var lastNameId = "last-name";
// var lastNameEl = document.getElementById(lastNameId);
// AlertValues(lastNameEl);

// var cityId = "city";
// var cityEl = document.getElementById(cityId);
// AlertValues(cityEl);
