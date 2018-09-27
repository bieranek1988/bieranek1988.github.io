var imiona = ['Adam','Marta','Paweł','Michał','KAsia','Sandra'];

// dodawani elementów do tablicy -  na końcu
imiona[6] = "Mikołaj";
imiona[7] = "Kinga";

imiona.push("Kamil");
imiona.push("Marcin");

// usuwanie elementó z tablic z końca
imiona.pop();
imiona.pop();

// dodawanie elementów tablicy na początku 
imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

//usuwanie elementów z tablicy 
var usuniętyElement = imiona.shift();
imiona.shift();
console.log( usunietyElement );


console.log( imiona );

//sprawdzenie "długości" tablicy 
var iloscElementowTablicy = imiona.length;
//console.log( iloscElementowTablicy );
//console.log( imiona );

// var textZTablicy = imiona[0] = + "," + imiona[1] +"," + imiona[2];
console.log( textZTablicy );


//rozbijanie tablicy na ciąg tekstowy
var elementyTablicyString = imiona,join(", ---- , ");
//console.log( elementyTablicyString);

//"odwrócenie tablicy"
//imiona.reverse();
//console.log( imiona);

// sortowanie tablicy 
//imiona.sort();
//console.log(imiona);

// sprawdzenie czy wartość w tablicy istnieje
console.log( imiona.indexOf( "Sandra"));

//metoda uswania ze srodka nie komletna
imiona.splice(1,1);  

