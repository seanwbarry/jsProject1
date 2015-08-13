$(document).ready(function () {
/*		
*/

var a = 'Fizz';
var b = 'Buzz';

	for (i=0;i<100;i++) {
			if ((i+1)%3===0 && (i+1)%5===0) {
				$('body').append('<p>'+a+b+'</p>');
			} else if ((i+1)%5===0) {
				$('body').append('<p>'+b+'</p>');
			} else if ((i+1)%3===0) {
				$('body').append('<p>'+a+'</p>');
			} else {
				$('body').append('<p>'+(i+1)+'</p>');
			}


				
			}



	

});