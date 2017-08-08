var quotes = ['But man is not made for defeat. A man can be destroyed but not defeated. -Ernest Hemingway', 'There is nothing permanent except change. -Heraclitus', 'Learning never exhausts the mind. -Leonardo da Vinci', 'All that we see or seem is but a dream within a dream. -Edgar Allan Poe', 'The only journey is the one within. -Rainer Maria Rilke']; 

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length)); 
    document.getElementById('quote-content').innerHTML = quotes[randomNumber]; 
}

$('#tweet-button').click(function(){
    var quoteContent = document.getElementById('quote-content').innerHTML; 
    $('a').attr('href','https://twitter.com/intent/tweet?text=' + quoteContent); 
}); 
