// metoda find wyszukuje potomków selektora. W poniższym przykladzie 
// poszuka paragrafów znajdujacych sie w div.
//metoda find może wyszukać po tagu, klasie , id, atrybucie
$("div").find("p").css({fontSize : "60px" , color: "deeppink"});

// metoda each - jako parametr przyjmuje funkcje zwrotną, która zostanie wykonana na każdym znalezionym elemencie
$("p").each( function( index, element ) {
    console.log( index, element );
    $(this).addClass('new_class').css({fontSize : "40px" , 
    backgroundColor: "yellow"                                  });
    
});