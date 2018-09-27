var parFirst = document.getElementById("parFirst");

// pobieram rodzica dla elementu  #parFirst za pomocą właściwości parentElement
//cosnsole.log( parFirst.parentElement);

// childNodes pobiera wszystkie węzły w tym także białe znaki między elemantami  jako "text"  oraz komentarze 
//console.log(parFirst.childNodes[0]);

// children pobiera tylko te węzły, które są elementem html 
console.log(parFirst.children);

// pobieram pierwsze dziecko elementu #parFirst
var pierwszeDziecko = parFirst.children[0];
// pobieram następny węzeł dla pierwszeDziecko, który jest elementem w relacji rodzenstwo
//console.log(pierwszeDziecko.nextElementSibling);

// pobieram nastepny wezel dla pierwszedziecko  niezaleznie czy jest elementem html, textem czy komentarzem
// console.log(pierwszeDziecko.nextSibling);


// lastChild pobiera ostatnie dziecko elementu niezaleznie czy jest elementem html,textem czy komentarzem
var ostatnieDziecko = parFirst.lastElementChild;
console.log( ostatnieDziecko);




