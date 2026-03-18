let podminka = !false;

podminka = true && false;

podmimka = false || true;


console.log(podminka); 


// Podmínka pře if

let number = 10;
let message;

if (number > 0) {
    message = "kladné číslo";
} else {
    message = "číso není kladné ";
}
console.log(message);

// druhé řešeníí pomocí ternárního operantu

let number2 = 10;
let message2 = (number2 > 0) ? "kladné číslo" : "není kladné";
console.log(message2);