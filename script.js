function res(){
    var width = $('.square').width();
	$('.square').height(width);
} res();

$( window ).resize(function() {
	res();
});