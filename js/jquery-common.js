function jRequest(url, jsonDataObject, responseHandler) {
    varType = "POST";
    varUrl = url;
    varData = jsonDataObject
    varContentType = "application/json; charset=utf-8";
    varDataType = "json";  
    varProcessData = true;
    jQuery.ajax({
        type: varType, //GET or POST or PUT or DELETE verb
        url: varUrl, // Location of the service
        data: varData, //Data sent to server
        contentType: varContentType, // content type sent to server
        dataType: varDataType, //Expected data format from server
        processdata: varProcessData, //True or False
        success: function(msg) {//On Successfull service call
            responseHandler(msg);
        }
    });
}

function jRedirect(url) {
    jQuery(location).attr('href', url);
}

String.prototype.isNullOrEmpty = function() {

    if (this == null || this.length == 0) {
        return true;
    }
    return false;
}
function disableBackButton() {
    window.history.forward(1);
}

jQuery(document).ready(function() {

    	resizer();
		jQuery(window).resize(function()
		{
			resizer();
		});
});

function resizer()
	{
		var height = jQuery(window).height();
		var width = jQuery(window).width();
		var estate = height - 90;
		
		if (estate >= 900) {
			jQuery('#flashContainer').css('height', 965);
			jQuery('#MGM').css('height', 900);
		} else if (estate <= 450) {
			jQuery('#flashContainer').css('height', 46);
			jQuery('#MGM').css('height', 450);
		} else {
			jQuery('#flashContainer').css('height', estate);
			jQuery('#MGM').css('height', estate - 0); // this was originally 65px and i changed it to 0..works on resize.
		}
		if (width <= 960) {
			jQuery('#MGM').width(960);
		} else {
			jQuery('#MGM').width(width);
		}
	}

function ShowHide(id,hyperLink) {

    if (hyperLink) {
        hyperLink.style.display = "none";
    }
    var obj = jQuery('#' + id);
    
    if (obj && (obj[0].style.display == "" || obj[0].style.display == "none")) {
        obj[0].style.display = "block";

    }
    else {
        obj[0].style.display = "none";
    }
    
}