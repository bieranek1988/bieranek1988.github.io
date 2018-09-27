
function pobierzDane(e);{
    e.preventDefault();
    ajax"GET",
     "http://echo.jsontest.com/userID/108/userName/Akademia108/userURL/akademia108.pl",
         wrzucDaneDoHtml }
         

function wrzucDaneDOHtml
















function ajax(method, url, callback){
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                
                debugger;
                var returnData = httpRequest.responseText;
                
                callback(returnData);
                
                httpRequest = null;
            }
            
        }
    }
    
}