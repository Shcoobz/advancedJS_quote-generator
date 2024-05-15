import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Quote from './components/Quote';
import QuoteButtons from './components/QuoteButton';
import localQuotes from './data/quotes';

const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
let apiQuotes = [];

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      showNewQuote();
    } catch (error) {
      getLocalQuoteIfApiError();
    }
  };

  const getLocalQuoteIfApiError = () => {
    apiQuotes = localQuotes;
    showNewQuote();
  };

  const showNewQuote = () => {
    const randomQuote = getRandomQuote();
    setAuthor(handleAuthor(randomQuote));
    handleQuoteLength(randomQuote);
    setQuote(randomQuote.text);
    setIsLoading(false);
  };

  const getRandomQuote = () => {
    return apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  };

  const handleAuthor = (randomQuote) => {
    return randomQuote.author || 'Unknown';
  };

  const handleQuoteLength = (randomQuote) => {
    const quoteText = document.getElementById('quote');
    quoteText.classList[randomQuote.text.length > 120 ? 'add' : 'remove']('long-quote');
  };

  const handleTweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className='quote-container' id='quote-container'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Quote quote={quote} author={author} />
          <QuoteButtons
            handleNewQuote={showNewQuote}
            handleTweetQuote={handleTweetQuote}
          />
        </>
      )}
    </div>
  );
}

export default App;
