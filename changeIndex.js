$(document).ready(function(){
	$("#clickOut").click(function(){
		$('#menuAlternate').hide();
		$(this).parent().siblings('#menu').eq(0).show();
		var changeName = "Most Viewed Articles of the Week";
		$(this).parent().siblings('#content').find('h2').eq(0).text(changeName);
		$('.backImage').hide();
		$(this).parent().siblings('#backImageAlternate').eq(0).show();

	});
	$("#clickIn").click(function(){
		$('#menu').hide();
		var changeName = "Your Articles of the Week";
		$(this).parent().siblings('#content').find('h2').eq(0).text(changeName);
		$(this).parent().siblings('#menuAlternate').eq(0).show();
		$('#backImageAlternate').hide();
		$(this).parent().siblings('.backImage').eq(0).show();

	});
});