/* global */ 

$(function(){
  	
  'use strict';
  
  $(".content-tabs li").click(function(){
	
	$(this).addClass('selected').siblings('li').removeClass('selected');
	  window.console.log($(this).data('class'));
	  $('.content-info  > div').hide();
	  $('.' + $(this).data('class')).fadeIn();	
		
	});
	
  	$('.btn').click(function(){
		
		$('.navbar .dropdown-links').toggle(500);
	});
  });

 $(window).scroll(function () { if ($(this).scrollTop() >= 501 ) 
 
 
 {
	 $(".navbar").addClass('fixed');

	 
 } else
 
 
 {  $(".navbar").removeClass('fixed');

           
 }
							                                  
});
