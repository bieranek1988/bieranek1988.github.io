// pobranie elementu po id - tylko jeden element 
// parametr w getElementByld bez # (zostało uwzględnione)
var parFirst  = document.getElementById("parFirst");
//console.log( parFirst);
// pobranie elementu  po klasie - kolekcja elementów
// parametr w getElementByClassName bez .
var elementLink = document.getElementsByClassName("link");
//console.log (elementLink );
//console.log( elementLink.length);

// pobranie elementów po tagu 
var elementTag = document.getElementsByTagName("p");
//console.log(elementTag);

// pobranie wszystkich elementów po selektorze .superlink - tutaj niezbędne jest podanie selektor klasy, jezeli pobieramy klasy lub id jesli pobieramy po id

var element Superlink = document.querrySelectorAll(".superlink");
//console.log( elementSuperlink );

// pobranie pojedynczego elementu po selektorze id 
var partSecond = document.querrySelector("#parSecond");
// console.log( partSecond);

var mojeLinki = document.querySelectorAll("link");

//console.log( mojeLinki[1]);

//for( var i = 0; < mojeLinki.length; i++) {
//    console.log( "To mój link nr " + i +1 );
//    console.log( mojeLinki[i] );
//    console.log("-------------");
//}

// pętla forEach działa na kolekcji pobranej za pomocą metody document.querrySelectorAll()
moje.Linki.forEach(function(element,index){
    console.log( element );
});
                  