let totalPrice  = 90;

if (totalPrice >= 100) {
    console.log ("Sleva 30%!!! váš nákup teď stojí pouze " + (totalPrice * 0.7) + "Kč");
} else {
    console.log ("Utraťte dalších " + ( 100 - totalPrice) + " Kč a získejte slevu 30%!");
}
