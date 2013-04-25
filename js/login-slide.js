jQuery(document).ready(function() {
	// Expand Panel
	jQuery("#openLoginPanel").click(function(){
		jQuery("div#loginPanel").slideDown("slow");
	});         

	// Collapse Panel
	jQuery("#closeLoginPanel").click(function(){
		jQuery("div#loginPanel").slideUp("slow");  
	});

});

function Signout() {

    if (window.location.hostname == 'localhost') {
        jRequest("../members/pcui.asmx/Signout", '{}',
            SignoutSuccess);
    }
    else {
        jRequest("https://www.bellagio.com/members/pcui.asmx/Signout", '{}',
            SignoutSuccess);
    }
    
    return false;
}

function SignoutSuccess(result) {
    if (result.d && result.d == true) {

        if (window.location.hostname == 'localhost') {
            jQuery("#isLoggedIn")[0].value = 'False';
            jRedirect("../default.aspx?Signout=true")
      
        }
        else {
            jQuery("#isLoggedIn")[0].value = 'False';
            jRedirect("http://www.bellagio.com/default.aspx?Signout=true")  
        }
    
    
    }
}

function LoginHome() {

    if (jQuery('#UserName').val().isNullOrEmpty() || jQuery('#Password').val().isNullOrEmpty()) {
        ShowIncorrectUsernamePassword();
        return;
    }

    jQuery("#dvAuthStatus").show();


    if (window.location.hostname == 'localhost') {
        jRequest("../members/pcui.asmx/Login", '{"userName": "' + jQuery('#UserName').val() + '" , "password": "' + jQuery('#Password').val() + '"}',
            ServiceSucceededWithPath);
    }
    else {
        if (window.location.pathname.indexOf('hotel') > 0) {
            jRequest("https://www.bellagio.com/members/pcui.asmx/Login", '{"userName": "' + jQuery('#UserName').val() + '" , "password": "' + jQuery('#Password').val() + '"}',
            ServiceSucceededWithPath);
        }
        else {
            jRequest("https://www.bellagio.com/members/pcui.asmx/Login", '{"userName": "' + jQuery('#UserName').val() + '" , "password": "' + jQuery('#Password').val() + '"}',
            ServiceSucceeded);
        }
    }

}

function LoginLandingTemplate(path) {
    if (jQuery('#UserNameLT').val().isNullOrEmpty() || jQuery('#PasswordLT').val().isNullOrEmpty()) {
        ShowIncorrectUsernamePasswordLandingTemplate();
        return;
    }

    jQuery("#dvAuthStatusLT").show();

    jRequest(path, '{"userName": "' + jQuery('#UserNameLT').val() + '" , "password": "' + jQuery('#PasswordLT').val() + '"}',
            ServiceSucceededWithPath);

}
function Login(path) {


    if (jQuery('#UserName').val().isNullOrEmpty() || jQuery('#Password').val().isNullOrEmpty()) {
        ShowIncorrectUsernamePassword();
        return;
    }

    jQuery("#dvAuthStatus").show();

    jRequest(path, '{"userName": "' + jQuery('#UserName').val() + '" , "password": "' + jQuery('#Password').val() + '"}',
            ServiceSucceededWithPath);

}

function ShowIncorrectUsernamePassword() {
    jQuery("#errLogin").show();
    jQuery("#errPassword").show();
}

function HideIncorrectUsernamePassword() {
    jQuery("#errLogin").hide();
    jQuery("#errPassword").hide();
}

function ShowIncorrectUsernamePasswordLandingTemplate() {
    jQuery("#errLoginLT").show();
    jQuery("#errPasswordLT").show();
}

function HideIncorrectUsernamePasswordLandingTemplate() {
    jQuery("#errLoginLT").hide();
    jQuery("#errPasswordLT").hide();
}

function ShowUnknownErrorLandingTemplate(message) {
    var ltLabel = jQuery("#spUnknownErrorLT");
    if (ltLabel && ltLabel[0]) {
        jQuery("#spUnknownErrorLT").show();
        jQuery("#spUnknownErrorLT")[0].innerText = message;
    }
    else {
        jQuery("#spUnknownError").show();
        jQuery("#spUnknownError")[0].innerText = message;
    }
}

function HideUnknownErrorLandingTemplate() {
    jQuery("#spUnknownErrorLT").hide();
}


function ServiceSucceeded(result) {


    HideIncorrectUsernamePassword();
    HideUnknownErrorMessage();

    if (window.location.hostname == 'localhost') {
        if (result.d && result.d.Success == true) {
            jRedirect("../hotel/hotel-promotions-login.aspx")
        }
        else if (result.d && result.d.Success == false && !result.d.ErrorMessage.isNullOrEmpty()) {
            ShowUnknownErrorMessage(result.d.ErrorMessage);
        }
        else {
            //Error user name or password incorrect
            ShowIncorrectUsernamePassword();
        }
    }
    else {
        if (result.d && result.d.Success == true) {
            jRedirect("https://www.bellagio.com/hotel/hotel-promotions-login.aspx")
        }
        else if (result.d && result.d.Success == false && !result.d.ErrorMessage.isNullOrEmpty()) {
            ShowUnknownErrorMessage(result.d.ErrorMessage);
        }
        else {
            //Error user name or password incorrect
            ShowIncorrectUsernamePassword();
        }
    }
    
    jQuery("#dvAuthStatus").hide();
}

function HideUnknownErrorMessage() {
    jQuery("#spUnknownError").hide();
}
function ShowUnknownErrorMessage(message) {
    jQuery("#spUnknownError").show();
    jQuery("#spUnknownError")[0].innerText = message;
}

function ServiceSucceededWithPath(result) {

    HideIncorrectUsernamePassword();
    HideIncorrectUsernamePasswordLandingTemplate()
    HideUnknownErrorLandingTemplate()

    if (result.d && result.d.Success == true) {

        var searchPath = window.location.search;

        if (window.location.hostname == 'localhost') {
            if (searchPath) {
                jRedirect("../hotel/hotel-promotions-login.aspx" + searchPath)
            }
            else {
                jRedirect("../hotel/hotel-promotions-login.aspx")
            }  
        }
        else {
            if (searchPath) {
                jRedirect("https://www.bellagio.com/hotel/hotel-promotions-login.aspx" + searchPath)
            }
            else {
                jRedirect("https://www.bellagio.com/hotel/hotel-promotions-login.aspx")
            }
        }
        
    }
    else if (result.d && result.d.Success == false && !result.d.ErrorMessage.isNullOrEmpty()) {
        ShowUnknownErrorLandingTemplate(result.d.ErrorMessage)
    }
    else {
        //Error user name or password incorrect
        ShowIncorrectUsernamePassword();
    }

    jQuery("#dvAuthStatus").hide();
    jQuery("#dvAuthStatusLT").hide();

}
