const userAge = parseInt ( prompt("Type your age here"));

const travelledKm = parseInt ( prompt("Type how many kilometers you want to travel"));

const priceForKm =  21 / 100;

const ticketPrice = travelledKm * priceForKm;

const ticketMinorDiscount = (20 / 100 * ticketPrice);

const ticketSeniorDiscount = (40 / 100 * ticketPrice);




// if (userAge < 18) {
//     document.getElementById ("output").innerHTML = (ticketPrice - ticketMinorDiscount).toFixed(2) + "&euro;";
// } else if (userAge > 64) {
//     document.getElementById ("output").innerHTML = (ticketPrice - ticketSeniorDiscount).toFixed(2) + "&euro;";
// } else {
//     document.getElementById ("output").innerHTML = ticketPrice.toFixed(2) + "&euro;";
// }


let price;

if (userAge < 18) {
    price = ticketPrice - ticketMinorDiscount;
} else if (userAge > 64) {
    price = ticketPrice - ticketSeniorDiscount;
} else {
    price = ticketPrice;
}

document.getElementById ("output").innerHTML = price.toFixed(2) + "&euro;";


