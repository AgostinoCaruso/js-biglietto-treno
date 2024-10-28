/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

"use strict"; // to check for typo error


// variables
const priceTicketKm = 0.21; //for each km €
const discountJunior = 20; //is a percentage discount for below 18 y
const discountSenior = 40; //is a percentage discount for over 65 y
let finalPrice; //is the final price, using fixed to cut decimal num
let discountedPrice;
//user input
let kmForTrip, userAge; // km for the travel, age of the user input
console.clear();

//asking user age and km
do {
    kmForTrip = parseInt(prompt("Hi, insert your travel km:"));
} while (isNaN(kmForTrip)) // i make sure user can only input num

do {
    userAge = parseInt(prompt("Hi, insert your current age:"));
} while (isNaN(userAge)) // i make sure user can only input num

//check how much does it cost
finalPrice = parseInt(priceTicketKm * kmForTrip); //final price before discount

//if statement
if (userAge < 18) {
    CalculateDiscountPrice(discountJunior);
}
else if (userAge >= 65) {
    CalculateDiscountPrice(discountSenior);
} else {
    console.log(`The final cost is: ${finalPrice}€, unfortunatelly at your age of ${userAge} you cannot access to a discount price!\n
Your data for this travel is: age:${userAge}, km: ${kmForTrip}, final price is: ${finalPrice}€!!`);
}

//functions
function CalculateDiscountPrice(discountedRange) {
    discountedPrice = (finalPrice * discountedRange) / 100; //calculate discount amount based on age user
    finalPrice -= discountedPrice.toFixed(2); // cut decimal number
    console.log(`The final cost is: ${finalPrice}€, since your age is ${userAge} based on your age you ve a discount of ${discountedRange}%.\nYour discounted amount is: ${discountedPrice}€.\n
Your data for this travel is: age:${userAge}, km: ${kmForTrip}, original price was: ${finalPrice + discountedPrice}€, final price is: ${finalPrice}€!!`);
}