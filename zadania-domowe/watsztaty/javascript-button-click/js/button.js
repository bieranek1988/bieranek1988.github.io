
function pobierzDane(e);{
    e.preventDefault();
    
    ajax("GET",
     "http://echo.jsontest.com/userID/108/userName/Akademia108/userURL/akademia108.pl",
         wrzucDaneDOHtmlHtml) 
}
         

function wrzucDaneDOHtml(dane) {
    var pUserId = document.createElement('p');
    var pUserName = document.createElement('p');
    var pUserUrl = ddocument.createElement('p');
    
    
    var pUserIdContent = document.createTextNode("userId: " + dane.userId);
    var pUserNameContent = document.createTextNode("userName: " + dane.userName);
    var pUserUrlContent = document.createTextNode("userName: " + dane.userUrl);
    
    
//    pUserId.appendChild(puserIdContent);
//    pUserName.appendChild(pUserNameContent);
//    pUserUrl.appendChild(pUserUrlContent);
//    
//    document.body.appendChild(pUserId);
//    document.body.appendChild(pUserName);
//    document.body.appendChild(pUserUrl);
//    
//    
//}

    
    
    































// jeśli 4: dane zwrócone i gotowe do uzycia
if(XMLHttpRequest.readyState ==4) {
    
}







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