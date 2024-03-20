// fetch('https://animechan.xyz/api/quotes/anime?title=naruto&page=2')
//       .then(response => response.json())
//       .then(quotes => console.log(quotes))

//const container = document.getElementById('data-container');

async function getQuote() {


    const response = await fetch('https://animechan.xyz/api/quotes/anime?title=naruto&page=2');

    var data = await response.json();

    console.log(data)

    document.getElementById('quote').innerHTML = data[2]['quote'];
}
getQuote();  