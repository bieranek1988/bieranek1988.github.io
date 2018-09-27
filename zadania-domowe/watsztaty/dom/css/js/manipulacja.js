// innerHTML - pobieranie
var parFirst = document.getElementById("parFirst");
//console.log( parFirst.innerHTML );
//console.log( parFirst.outerHTML );

// inner HTML - przypisanie wartosci 
var mainheader = document.querySelector("h1");
mainheader.innerHTML = "<span>Nowa zawartość h1 wstawiona w span </span>";

// zmiana styli
mainheader.style.color = "red";

// przypisanie klasy 
mainheader.className = "headingtext";

// pobranie klas elementu 
conslole.log( mainheader.className);

// classlist
mainheader.classList.add( "nowa-klasa");

// pobranie klas elementu
console.log( mainheader.className);

// przypisanie klasy 
mainheader.className = "headingtext";

// pobranie klas elementu 
console.log( mainheader.className);

// classlist dodawanie klasy
mainheader.classList.add( "nowa-klasa");


// classList usuwanie klasy
mainheader.classList.remove("headingtext");
