import '../quotes/quotes.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import { useEffect, useState } from 'react';

const Quotes = () => {
  const[quote, setQuote] = useState('');
  const[author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, [])

const getQuote = () => {
  let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

  fetch(url)
  .then(res => res.json())
  .then( data => {
    let dataQuotes = data.quotes;
    let randomNum = Math.floor(Math.random()*dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setQuote(randomQuote.quote)
    setAuthor(randomQuote.author)
  })
}

const handleClick = () => {
  getQuote();
}




  return (
    <div id='quote-box'>
      <div id="text">
        <p>
          {quote}
        </p>
      </div>

      <div id="author">
        <p>{author}</p>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="tweet-quote">
           <TwitterIcon />
          </a>
          <a href="#" id="facebook-quote">
           <FacebookSharpIcon />
          </a>
        </div>

        <button onClick={handleClick} id="new-quote">New Quotes</button>
      </div>
    </div>
  )
}

export default Quotes