// funkcoja bez parametrów

function wyswietlWkonsoli(){
console.log( "Adam Nowacki");
}

wyswietlWkonsoli();

//funkcja z parametrami

function wyswietlWkonsoliParam( imie, nazwisko){
console.log( imie + " " + nazwisko );

}

wyswietlWkonsoliParam( "Adam", "Nowacki" );
wyswietlWkonsoliParam( "Katarzyna" , "Izak");
wyswietlWkonsoliParam( "Kinga" , "Korycka");
wyswietlWkonsoliParam( "Adrian", "Bąk");

// zwracanie wartości przez funkcję

function obliczPodatek( kwota, procentPodatek ) {
    var wynik = kwota * ( procentPodatek / 100 );
    return wynik.toFixed(2);
}

var obliczenia1 = obliczPodatek( 4990, 23 );
console.log( "Wysokość obliczonego podatku wynosi: " + obliczenia1 );


