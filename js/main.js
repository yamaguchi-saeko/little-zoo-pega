$(function() {
	var sW;
	$('#header-icon').on('click', function(event) {
		$('#header-block').stop(true).slideToggle('fast');
		event.preventDefault();
		/* Act on the event */
	});
	$(window).resize(function() {
  		sW = window.innerWidth;
  		if(sW>900){
  			$("#header-block").css('display', 'none');
  		}
  		else{
  			$("#header-block").css('display', 'block');
  		}
	});
	$(window).resize(function() {
        sW = window.innerWidth;
        if(sW>900){
     $('#header-icon').on('click', function() {
        $('.menu').stop(true).css('display', 'none');
    });
 }});
 });