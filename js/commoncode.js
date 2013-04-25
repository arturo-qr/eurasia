// JavaScript Document


//Macromedia Functions

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function SetStatusbar(msg){
	window.status=msg;
	return true;
}

function GetSectionID()
{
	return document.body.id; 
}

function GetPageID()
{ 
	return window.location.pathname;
}


//******************************************
//  Custom functions
//******************************************

// -- BookGui - Forms
// Dropdowns to Hide based on area click
document.onclick = HideAllDropDowns;
    if (document.captureEvents) document.captureEvents(Event.CLICK);

    function HideAllDropDowns(e) {
        //alert('fired')
      /*  hideView('nights', '');
        hideView('guests', '');
		hideView('restaurants2', '');
		hideView('party', '');*/
    }

// -- BookGui - Nights
function changeNumberNights(intView, field, show, hide){
	var myTextBox;
	myTextBox = document.getElementById(field);
	myTextBox.value = intView;
	document.getElementById(hide).style.display = "none";
	if (show != ''){document.getElementById(show).style.display= "block";};

}

function changeView(intView, field, show, hide) {
  var myTextBox;
  myTextBox = document.getElementById(field);
  myTextBox.value = intView;
  document.getElementById(hide).style.display = "none";
  if (show != '') { document.getElementById(show).style.display = "block"; };
  if (window.location.pathname.indexOf('reservations') > 0 || window.location.pathname.indexOf('faq') > 0 || window.location.pathname.indexOf('contact-us') > 0) {
    window.location = "../hotel/hotel-promotions-login.aspx?resdate=" + intView;
  }
  else {
    window.location = "hotel-promotions-login.aspx?resdate=" + intView;
  }
}

function showView(element, hide, e) {
    if (document.getElementById(element).style.display == 'block') {
        hideView(element,hide)
    }
    else {
        document.getElementById(element).style.display = "block";
    }
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}

function hideView(element, hide,e) {
    document.getElementById(element).style.display = "none";
}
// Dining Reservations SetID()
function SetRestId(intRestId) {
	document.hform1.restid.value = intRestId;
}

function NewsWin() {
    var winleft = (screen.width - 450) / 2;
    var winUp = (screen.height - 450) / 2;
    Win = window.open('http://Global.net/Rich-Famous-Lucky.htm', 'privacy', 'toolbar=yes,scrollbars=yes,resizable=yes,status=yes,width=450,height=450,top=' + winUp + ',left=' + winleft);
    if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}
function PrivacyWin() {
var winleft = (screen.width - 450) / 2;
var winUp = (screen.height - 450) / 2;
Win = window.open('http://www.mgmmirage.com/privacy.htm','privacy','toolbar=yes,scrollbars=yes,resizable=yes,status=yes,width=450,height=450,top='+winUp+',left='+winleft);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

function TermsOfUseWin() {
var winleft = (screen.width - 450) / 2;
var winUp = (screen.height - 450) / 2;
Win = window.open('http://www.mgmmirage.com/termsofuse.htm','privacy','toolbar=yes,scrollbars=yes,resizable=yes,status=yes,width=450,height=450,top='+winUp+',left='+winleft);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

function MlifePopWin() {
var winleft = (screen.width - 450) / 2;
var winUp = (screen.height - 450) / 2;
Win = window.open('/peelad/interior_popup.swf?width=252&amp;height=525','mlifepop','toolbar=no,scrollbars=yes,resizable=no,status=no,width=252,height=525,top='+winUp+',left='+winleft);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Dinner Window
function DinnerWin(Restaurant) { 
window.open(pageTracker._getLinkerUrl('http://Global.net/bookingengine.aspx?pid=190&host=dining&code='+Restaurant),'dinner');
//window.open(pageTracker._getLinkerUrl('https://test-reservations.mgmmirage.com/bookingengine.aspx?pid=190&host=dining&code='+Restaurant),'dinner');
}

// Dining Reservations
function RestaurantWinGui(theURL,ad,dine,party) { 
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=dining&pid=190'; }
//if (theURL == '') { theURL = 'http://test-reservations.mgmmirage.com/bookingengine.aspx?host=dining&pid=190'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (dine!=''){ theURL = theURL + "&code=" + dine;}
if (party!=''){theURL = theURL + "&guests=" + party;}
var winleft = (screen.width - 800) / 2;
var winUp = (screen.height - 625) / 2;
winProp = 'width=800,height=625,left='+winleft+',top='+winUp+',scrollbars=yes,resizable=yes,menubar=yes,toolbar=yes,status=yes';
Win = window.open(theURL,'resWin',winProp);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWin(theURL,ad,nights,guests) { 
//if (theURL == '') { theURL = 'https://test-reservations.mgmmirage.com/bookingengine.aspx?host=hotel&pid=190'; }
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=hotel&pid=190'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
if (guests!=''){theURL = theURL + "&guests=" + guests;}
Win = window.open(pageTracker._getLinkerUrl(theURL),'resWin') ; 
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWinPromos(theURL) {
  Win = window.open(pageTracker._getLinkerUrl(theURL), 'resWin');
  if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWinES(theURL,ad,nights) { 
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=hotel&pid=190&lang=es-ES'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
Win = window.open(pageTracker._getLinkerUrl(theURL),'resWin') ; 
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWinDE(theURL,ad,nights) { 
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=hotel&pid=190&lang=de-DE'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
Win = window.open(pageTracker._getLinkerUrl(theURL),'resWin') ; 
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWinZHTW(theURL,ad,nights) { 
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=hotel&pid=190&lang=zh-TW'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
Win = window.open(pageTracker._getLinkerUrl(theURL),'resWin') ; 
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWinZHCH(theURL,ad,nights) { 
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=hotel&pid=190&lang=zh-CH'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
Win = window.open(pageTracker._getLinkerUrl(theURL),'resWin') ; 
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Room Window
function RoomWinJA(theURL,ad,nights) { 
if (theURL == '') { theURL = 'http://Global.net/bookingengine.aspx?host=hotel&pid=190&lang=ja-JP'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
Win = window.open(pageTracker._getLinkerUrl(theURL),'resWin') ; 
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center "O" Window
function CirqueWin(theURL,ad,nights) { 
if (theURL == '') { theURL = 'https://oss.ticketmaster.com/html/pack_planlist.htmI?l=EN&team=bellagio&selID=106'; }
if (ad!=''){ theURL = theURL + "&ad=" + ad;}
if (nights!=''){theURL = theURL + "&nights=" + nights;}
var winleft = (screen.width - 800) / 2;
var winUp = (screen.height - 500) / 2;
winProp = 'width=800,height=500,left='+winleft+',top='+winUp+',scrollbars=yes,resizable=yes,menubar=yes,toolbar=no,status=yes';
Win = window.open(theURL,'resWin',winProp);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Comp Window for MPE to be Removed when new interface is posted live.
function MPEWin() {
var winleft = (screen.width - 640) / 2;
var winUp = (screen.height - 500) / 2;
Win = window.open('http://Global.net/Guestbook/Guestbook.aspx?PID=190','mpe','toolbar=yes,scrollbars=yes,resizable=yes,status=yes,width=640,height=500,top='+winUp+',left='+winleft);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Open guestbook / MPE
function guestBook(email){
var winleft = (screen.width - 640) / 2;
var winUp = (screen.height - 500) / 2;
//var URL = "http://Global.net/MPE/Guestbook/Guestbook.aspx?PID=190"
var URL = "http://Global.net/Guestbook/Guestbook.aspx?PID=190"
if (email != undefined){
	URL += "&email=" + email
}
winProp = 'width=640,height=500,left='+winleft+',top='+winUp+',scrollbars=yes,resizable=yes,menubar=yes,toolbar=yes,status=yes';
Win = window.open(pageTracker._getLinkerUrl(URL),'guestbook',winProp);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Center Golf Window
function golfWin() { 
var winleft = (screen.width - 795) / 2;
var winUp = (screen.height - 460) / 2;
winProp = 'width=620,height=450,left='+winleft+',top='+winUp+',scrollbars=yes,resizable=yes,menubar=no,toolbar=yes,status=yes';
Win = window.open('http://Global.net/golf/primm/pg_online_res_date.asp?pid=190','golf',winProp);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

// Photography by Bellagio Window
function PhotosWin(theURL) { 
if (theURL == null) { theURL = 'http://Global.net/PhotoView/'; }
var winleft = (screen.width - 750) / 2;
var winUp = (screen.height - 535) / 2;
winProp = 'width=750,height=535,left='+winleft+',top='+winUp+',scrollbars=yes,resizable=yes,menubar=yes,toolbar=no,status=yes';
Win = window.open(theURL,'viewphotos',winProp);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

function popWin(theURL, winName, popW, popH, features) { 
var winleft = (screen.width - popW) / 2;
var winUp = (screen.height - popH) / 2;
winProp = 'width='+popW+',height='+popH+',left='+winleft+',top='+winUp+',resizable=yes,status=yes,'+features;
Win = window.open(theURL,winName,winProp);
if (parseInt(navigator.appVersion) >= 4) { Win.focus(); }
}

//******************************************
//  Floral Gallery Javascript Dropdown View
//******************************************
function previewPic(objName, sel) {
    document.getElementById(objName).src = "" + sel.options[sel.selectedIndex].value;
}

// Larger Images View in from Drop Down / Lightbox / XML
function showPic(selName,prefix,linkName,parentName) {
    var sel = document.getElementById(selName);
    var o = document.getElementById(parentName+"_"+linkName+sel.selectedIndex);
    o.click();
}

function keyCheck(objEvent){
	/*This checks to see if the what key has been
	pressed on the user's keyboard.  The ascii value
	of the key that has been pressed is returned 
	by the function*/
	var intKey;
	if(objEvent.which == null){
		intKey = event.keyCode;
	}
	else{
		intKey = evnt.which;
	}
	return intKey;
}
	
// Puts focus on textbox
function enterDir(objEvent, flag){
    if(keyCheck(objEvent) == 13){
        //alert("Enter")
        switch(flag)
        {
            case "guestbook":
	            guestBook(document.mpeForm.email_signup.value);
	            break;
            
        }
        //document.mpeForm.submit();
    }
    else
    {
        return false;
    }
}

// ****************************************************************
// *********** DROP DOWN JUMP MENU ********************************
// ****************************************************************
function surfto(form) {

       var dropRestaurant = document.getElementById('dropRestaurants');
       var myindex = dropRestaurant.selectedIndex;
       
       if (myindex == 0) 
       {
       alert('Please select a restaurant to view sample menu.');
       } 
       else
       {
     //  var myindex=form.selectRestaurant.selectedIndex
       window.open(dropRestaurant.options[myindex].value, 
         target="_blank");
		}
}

function surfto2(form) {

       var dropGolfCourses = document.getElementById('dropGolfCourses');
       var myindex = dropGolfCourses.selectedIndex;
       
       if (myindex == 0) 
       {
       alert('Please select a golf course to view green fees.');
       } 
       else
       {
       window.open(dropGolfCourses.options[myindex].value, 
         target="_blank");
		}
}



// ****************************************************************
// *********** HOME PAGE HEADER CHANGE PROCESSING *****************
// ****************************************************************

function generateHeader(headerNum,mediaPath,imgPath)
{
  var fileType = mediaPath.substring(mediaPath.length - 3);
  var flashvars = 'flashvars'+headerNum;
  var params = 'params'+headerNum;
  var attributes = 'attributes'+headerNum;
  var nonverblaster = 'nonverblaster'+headerNum;
  var pod = 'pod'+headerNum;
  var swf = 'swf'+headerNum;
  
  if ( fileType == "flv")
  {
	  flashvars = {};
	  flashvars.mediaURL = mediaPath;
	  flashvars.teaserURL = imgPath;
	  flashvars.allowSmoothing = "true";
	  flashvars.autoPlay = "true";
	  flashvars.buffer = "6";
	  flashvars.showTimecode = "true";
	  flashvars.loop = "false";
	  flashvars.controlColor = "0xC5A88D";
	  flashvars.controlBackColor = "0x190D08";
	  flashvars.scaleIfFullScreen = "true";
	  flashvars.showScalingButton = "false";
	  flashvars.defaultVolume = "100";
	  flashvars.crop = "false";
	  //flashvars.onClick = "toggleFullScreen";
	
	  params = {};
	  params.menu = "false";
	  params.allowFullScreen = "true";
	  params.allowScriptAccess = "always"
	  params.wmode = "transparent";
	
	  attributes = {};
	  attributes.id = nonverblaster;
	  attributes.name = nonverblaster;
	  attributes.bgcolor = "0x190D08";
	  
	  swfobject.embedSWF("/flash/NonverBlaster.swf", pod, "1900", "456", "9", "/flash/expressinstall.swf", flashvars, params, attributes);
	  registerForJavaScriptCommunication(nonverblaster);
	  exist_arr[parseInt(headerNum) - 1] = true;
  }
  else if ( fileType == "swf") 
  {
	  flashvars = {};
	  flashvars.buffer = "6";
	  flashvars.loop = "true";
	  
	  params = {};
	  params.allowScriptAccess = "always"
	  params.wmode = "transparent";
	
	  attributes = {};
	  attributes.id = swf;
	  attributes.name = swf;
	  
	  swfobject.embedSWF(mediaPath, pod, "1900", "456", "9", false, flashvars, params, attributes);
  }
}

//-----------------------------------------------------------------------------------------------------

function switchMedia(whichHeader) {
    var Details22 = document.getElementById('HomeColumn2');
    //Details22.innerHTML = "<div id=\"HomeGallery\"><div id=\"HomeGalleryNavigation\"></div><div id=\"Detail\">        <div id=\"DetailHeader\"> </div>        <div id=\"DetailCopy\"></div></div>    <!-- Item 2 -->        <div id=\"Detail2\">        <div id=\"DetailHeader\"></div>        <div id=\"DetailCopy\"></div>        <div id=\"DetailMoreInfo\"></div>    </div>    <!-- Item 3 -->    <div id=\"Detail3\">        <div id=\"DetailHeader\"></div>        <div id=\"DetailCopy\">        </div>        <div id=\"DetailMoreInfo class=\"DetailMoreInfo\"></div>  </div>    <!-- Item 4 -->    <div id=\"Detail4\"><br /><br />        <div id=\"DetailHeader\"></div>        <div id=\"DetailCopy\"></div>        <div id=\"DetailMoreInfo\"></div>    </div>    <!-- /ItemEnd -->  </div><div id=\"HomeColumn22\"></div>";
    //<span class="style2">Big Idea #4
    //RISK FACTORS.</a>
    if (isValid(Details22)) {
        var htmls = Details22.innerHTML;
        var starts = "<span class=\"style2\">Big Idea #4";
        var ends = "RISK FACTORS.</a>";

        var startn = htmls.indexOf(starts, start);
        var endn = htmls.indexOf(ends, start);
        var lens = htmls.length;
        
        var ok1 = htmls.substring(0, starts);
        var ok2 = htmls.substring(endn, lens);
        Details22.innerHTML = ok1 + ok2;
        
    }
	if (whichHeader=="header1"){
		document.getElementById("header1").style.display="block";
		document.getElementById("header2").style.display="none";
		document.getElementById("header3").style.display="none";
		document.getElementById("header4").style.display="none";
	}else if(whichHeader=="header2"){
		document.getElementById("header1").style.display="none";
		document.getElementById("header2").style.display="block";
		document.getElementById("header3").style.display="none";
		document.getElementById("header4").style.display="none";
	}else if(whichHeader=="header3"){
		document.getElementById("header1").style.display="none";
		document.getElementById("header2").style.display="none";
		document.getElementById("header3").style.display="block";
		document.getElementById("header4").style.display="none";
	}else if(whichHeader=="header4"){
		document.getElementById("header1").style.display="none";
		document.getElementById("header2").style.display="none";
		document.getElementById("header3").style.display="none";
		document.getElementById("header4").style.display="block";
	}
}

//----------------------------------------------------------------------------------------------

var exist_arr = new Array(false, false, false, false);

function processClick(whatClicked)
{
	switchMedia(whatClicked);

	for(i = 0; i < 4; i++){
		if ( exist_arr[i]==true ){
			if ( whatClicked==('header' + (i+1))) {
				getFlashMovie('nonverblaster' + (i+1)).sendToActionScript('play');
			} else {
				getFlashMovie('nonverblaster' + (i+1)).sendToActionScript('resetAll');
			}
		}
	}
	
}
