function dejMi3() {
    return 3;
}
 console.log(dejMi3());

 function nasobic(a,b) {
    console.log(a*b);
 }

 let r = nasobic(5,3)
 console.log(r)

 function nasobic2(a,b) {
    return(a*b);
 }

 let r2 = nasobic2(5*3)
 console.log(r2)

 // return navrátí hodnotu takze s ní dál můžeme  pracovat

 function konec() {
    console.log("A");
    return "hotovo";
    console.log("B") // nebude fungoavat, protože B není uložená promněná
 }

 let konec2 = konec
 console.log(konec2());