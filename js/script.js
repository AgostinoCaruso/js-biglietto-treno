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
let isUserInputWrong = 0;
console.clear();

//asking user age and km
do {
    if (isUserInputWrong == 0) {
        kmForTrip = parseInt(prompt("Hi, insert your travel km:"));
    }
    else {
        kmForTrip = parseInt(prompt("Invalid characters, please insert numbers:"));
    }
    //break from the do while and continue
    if (!isNaN(kmForTrip)) {
        isUserInputWrong = 0;
        break; // Esce dal ciclo se l'input è un numero
    }
    isUserInputWrong = 1;
} while (isNaN(kmForTrip)) // i make sure user can only input num
console.log(kmForTrip);
// isUserInputWrong=0;
do {
    if (isUserInputWrong == 0) {
        userAge = parseInt(prompt("Hi, insert your age:"));
    }
    else {
        userAge = parseInt(prompt("Invalid characters, please insert numbers:"));
    }
    if (!isNaN(userAge)) {
        isUserInputWrong = 0;
        break; // Esce dal ciclo se l'input è un numero
    }
    isUserInputWrong = 1;
} while (isNaN(userAge)) // i make sure user can only input num

//check how much does it cost
finalPrice = (priceTicketKm * kmForTrip).toFixed(2); //final price before discount
console.log(finalPrice);

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
// here i used const temp.. beacause i needed a variable to work inside the scope
function CalculateDiscountPrice(discountedRange) {
    discountedPrice = (finalPrice * discountedRange) / 100; //calculate discount amount based on age user
    finalPrice -= discountedPrice.toFixed(2); // cut decimal number
    const tempDiscountedPrice = discountedPrice.toFixed(2);
    const tempPriceAfterDiscount = finalPrice.toFixed(2);
    const tempPriceBeforeDiscount = (parseFloat(tempPriceAfterDiscount) + parseFloat(tempDiscountedPrice)).toFixed(2);
    console.log(`The final cost is: ${tempPriceAfterDiscount}€, since your age is ${userAge} based on your age you ve a discount of ${discountedRange}%.\nYour discounted amount is: ${tempDiscountedPrice}€.\n
Your data for this travel is: age:${userAge}, km: ${kmForTrip}, original price was: ${tempPriceBeforeDiscount}€, final price is: ${tempPriceAfterDiscount}€!!`);
}
