jQuery.noConflict();
(function($) {
$(function(){
	portBoxIni();
});

//port-box
function portBoxIni(){
	$(".port-box-close-btn").click(function(){
		$("#"+$(this).attr("data-for")).fadeOut(500);
	});

}




})(jQuery)