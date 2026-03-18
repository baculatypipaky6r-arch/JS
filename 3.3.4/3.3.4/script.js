// Vložené podmínky

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Vítej na stránce");
    if (isAdmin){
        console.log("Přístup do panelu admin je povlonen");
    } else {
        console.log("Přístup jako užuvatel povolen!");
    }
}

// Operátory

let age = 20;
let hasDriverLicens = true;

if (age>= 18 && hasDriverLicens){
    console.log("Můžeš řídit");
} else {
     console.log("řídt nemůžeš");
}

let isHoliday = false;
let isweekend = true;

if (isHoliday || isweekend){
    console.log("je čas relaxovat");
} else {
    console.log("Musíš pracovat");
}

let age2 = 18;
let fullprice = 100;


if (age2 < 3) {
    console.log("Cema pro dítě do tří let je" + fullprice * 0 + "Kč");
} else if(age2 >= 3 & age < 12){
    console.log ("Vaše cena je " + fullprice * 0,7 + "Kč");
} else (age2 > 12) 
    console.log("vaše cena " + fullprice + "Kč");
