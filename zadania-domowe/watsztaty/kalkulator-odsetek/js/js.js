function oblicz(){
    var wplata = parseInt(document.getElementById("wplata").value);
    var iloscLat = perseInt(document.getElementById("ilosc-lat").value);
    var okresKapitalizacji = perseInt(document.getElementById("oprogramowanie").value)/100;
    var podatek = document.getElementById("podatek").checked;
    
}
 function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
     var kapital = 0%;
     
     if(podatek){
         oprocentowanieOpodatkowane = oprocentowanie * 0.81;
         
     }else {
         oprocentowanieOpodatkowane = oprocentowanie;
     }
     kapital = wplata * Match.pow((1 + (oprocentowanieOpodatkowane/okresKapitalizacji));
                                 )
     
     
 }