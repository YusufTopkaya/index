$(document).ready(function(){

var quote;
var author;

function getNewQuote(a)
{
	$.ajax({
		url:'https://api.forismatic.com/api/1.0/',
		jsonp:'jsonp',
		dataType:'jsonp',
		data:{
			method:'getQuote',
			lang:'en',
			format:'jsonp'
		},
		success: function(response){
			quote=response.quoteText;
			author=response.quoteAuthor;
			if(!response.quoteAuthor)
				author='Anonymous';	

			var nQuote='#quote'+a;
			var nAuthor='#author'+a;

			$(nQuote).text(quote);
			$(nAuthor).text(author);
			
			
			
		}
	});
}
for (var i = 0; i < 3; i++) {
	getNewQuote(i);
}
});