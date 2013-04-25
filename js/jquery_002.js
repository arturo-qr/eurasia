// Media Window - Fade in out Images and Flash - RCS 09.29.10

jQuery(document).ready (function(){	
	jQuery(".showV").click(function () {
		jQuery('#FlashVideo').show();
		jQuery('#panel').slideUp(300);
		jQuery('.accordionBg').hide();
	});

	jQuery(".hideV").click(function () {
		jQuery('#FlashVideo').hide();
		jQuery('#panel').slideUp(300);
		jQuery('.accordionBg').hide();
	});

	jQuery(".image").click(function() {
	var image = jQuery(this).attr("rel");
	/*	jQuery('#MediaContainer').hide();
		jQuery('#MediaContainer').fadeIn('slow');
		jQuery('#MediaContainer').css('background-image', 'url('+ image +')');
		jQuery('#MediaWindow').hide();
		jQuery('#MediaWindow').fadeIn('slow');
		jQuery('#MediaWindow').css('background-image', 'url('+ image +')');
		jQuery('#panel').slideUp(300);
		jQuery('.accordionBg').hide();*/
	});
});
