const userAge = parseInt ( prompt("Type your age here"));

const travelledKm = parseInt ( prompt("Type how many kilometers you want to travel"));

const priceForKm =  0.21;

const ticketPrice = travelledKm * priceForKm;

const ticketMinorDiscount = (20 / 100 * ticketPrice);

const ticketSeniorDiscount = (40 / 100 * ticketPrice);


let price = ticketPrice

if (userAge < 18) {
    price = ticketPrice - ticketMinorDiscount;
} else if (userAge > 64) {
    price = ticketPrice - ticketSeniorDiscount;
} 

document.getElementById ("output").innerHTML = price.toFixed(2) + "&euro;";


