/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

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
do{
    kmForTrip = parseInt(prompt("Hi, insert your travel km:"));
}while(isNaN(kmForTrip)) // i make sure user can only input num
console.log(kmForTrip); // debugging

do{
    userAge = parseInt(prompt("Hi, insert your current age:"));
}while(isNaN(userAge)) // i make sure user can only input num
console.log(userAge); //debugging

//check how much does it cost
finalPrice = parseInt(priceTicketKm * kmForTrip); //final price before discount
console.log(finalPrice);

if(userAge < 18){
    CalculateDiscountPrice(discountJunior);
    console.log(finalPrice + " final price"); //debugging
}
else if(userAge > 65){
    CalculateDiscountPrice(discountSenior);
    console.log(finalPrice + " final price"); //debugging
}

if(userAge < 18 || userAge > 65){
    console.log(`The final cost is: ${finalPrice}` )

}


function CalculateDiscountPrice(age){
    discountedPrice = (finalPrice * age) / 100; //calculate discount amount based on age user
    console.log(discountedPrice + " discounted amount"); //debugging
    finalPrice -= discountedPrice.toFixed(2); // cut decimal number
}