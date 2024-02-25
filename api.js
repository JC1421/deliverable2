fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))

    fetch("https://animechan.xyz/api/quotes")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));