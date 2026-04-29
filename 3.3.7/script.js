function rekniAhoj() {
    console.log("ČUs")
}

rekniAhoj();
rekniAhoj();

let pozdrav = "Pozdrav!";

function ukazPozdrav(){
    console.log(pozdrav);

}

function testLocal() { 
    let localValue = 123;
    console.log(localValue);
}

ukazPozdrav();
ukazPozdrav();


if(true){
    var y = "var blok nerespektuje";
}
console.log(y);

// parametr a Argument 

function sayHello(name) {// name = parametr
    console.log("Ahoj" + name);
}

sayHello("Alice");

function kalkulacka (coislo1, cislo2){
    console.log(cislo2 + coislo1);
    console.log(cislo2 * coislo1);
    console.log(coislo1 / cislo2);
}

kalkulacka(22, 11);

function vypisCisla(zacatek,konec) {
    for (let y = zacatek; y <= konec; y++) {
console.log(y);
    }
}

vypisCisla(1, 5);

