function populate_date(month, day, year) {
    ge('date_month').value = month;
    ge('date_day').value = day;
    ge('date_year').value = year;
}

function ge(elem) {
    return document.getElementById(elem);
}

/*
* Simple Ajax call method.
*
* From http://en.wikipedia.org/wiki/XMLHttpRequest
*/

function ajax(url, vars, callbackFunction) {
    var request = undefined; //  new XMLHttpRequest();

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        request = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }



    request.open("GET", url, true);
    request.setRequestHeader("Content-Type",
                           "application/x-www-form-urlencoded");

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            if (request.responseText) {
                // alert(request.responseText);
                callbackFunction(request.responseText);
            }
        }
    };
    request.send(vars);
}
