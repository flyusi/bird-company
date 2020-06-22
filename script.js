function res(){
    var width = $('.square').width();
	$('.square').height(width);
}

$( window ).resize(res());