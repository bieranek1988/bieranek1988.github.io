// pobieram istniejacy wezel o id output
var istniejacyWezel = document.getElementById("output");
// sprawdzam czy udalo sie pobrac
//console.log( istniejacyWezel);

// tworze nowy element w html
var newElement = document.createElement("p");

// tworze tresc do  paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę tresc paragrafu, o!");


// wstawiam nowoutworzony tekst do nowoutworzonego pragrafu 
newElement.appendChild(newElementContent);

// dodaje do paragrafu atrybut class='textpar'
newElement.setAttribute( 'class' , 'textpar');

//console.log( newElement);

//wstawiam nasz przygotowany paragraf do div#output
istniejacyWezel.appendChild( newElement );





// usuwanie elementów z dokumentu
//istniejacyWezel.parentElement.removeChild( istniejacyWezel );

//document.getElementById("parFirst").removeChild( istniejacyWezel );

// insertBefore

var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore( br ,link.nextElementSibling );

// usuwanie atrybutów

link.removeAttribute( 'class');






