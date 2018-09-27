class Ogloszenia {
    constructor( tytul, tresc, kategoria, cena ) {
        this.tytul = tytul;
        this.tresc = tresc;
        this.cena = cena;
        this.kategoria = kategoria;
   
    
    }




wyswietl() {
    
var ogloszenie = " Tytuł ogłoszenia: " + this.tytul + " Treść: " + this.tresc + " Cena: " + this.cena + " Kategoria: " + this.kategoria;
    
    return ogloszenie;
    
}
    
    
}

var ogloszenie1 = new Ogloszenia( "Sprzedam Opla", "Niemiec płakał jak sprzedawał", 500, "motoryzacja"  );

console.log( ogloszenie1 );


var ogloszeniaDoWyswietlenia = ogloszenie1.wyswietl();
console.log( ogloszeniaDoWyswietlenia );