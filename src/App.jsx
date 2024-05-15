import { useState, useEffect } from 'react';

import Loader from './components/Loader';
import Quote from './components/Quote';
import QuoteButtons from './components/QuoteButton';

import localQuotes from './data/quotes';

/**
 * The API URL for fetching quotes.
 * @const {string} apiUrl - The URL pointing to the JSON file containing quote data.
 */
const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

/**
 * Array to store the quotes fetched from API or local fallback.
 * @const {Array} apiQuotes - Initially empty, intended to be filled with quote objects.
 */
let apiQuotes = [];

/**
 * The main component that displays quotes and interfaces for interaction.
 * Manages the quote display, author attribution, and loading state.
 */
function App() {
  /**
   * State hook for current quote text.
   * @const {string} quote - The currently displayed quote text.
   */
  const [quote, setQuote] = useState('');

  /**
   * State hook for the author of the current quote.
   * @const {string} author - The author of the currently displayed quote.
   */
  const [author, setAuthor] = useState('');

  /**
   * State hook to manage the loading state of the quote fetching process.
   * @const {boolean} isLoading - Boolean state indicating if the app is currently loading a quote.
   */
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Effect hook to fetch quotes on component mount.
   * @returns {void}
   */
  useEffect(function () {
    fetchQuotes();
  }, []);

  /**
   * Initializes and fetches quote data either from an API or locally if an error occurs.
   * @async
   * @returns {Promise<void>} - No direct output, side effects include setting state and handling loading state.
   */
  function fetchQuotes() {
    return (async function () {
      try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        showNewQuote();
      } catch (error) {
        getLocalQuoteIfApiError();
      }
    })();
  }

  /**
   * Fallback method to use local quotes if the API fetch fails.
   * @returns {void} - Sets the API quotes to local quotes and displays a new quote.
   */
  function getLocalQuoteIfApiError() {
    apiQuotes = localQuotes;
    showNewQuote();
  }

  /**
   * Displays a new quote randomly selected from the available quotes.
   * @returns {void} - Sets the author and quote state, and updates the loading state.
   */
  function showNewQuote() {
    const randomQuote = getRandomQuote();
    setAuthor(handleAuthor(randomQuote));
    setQuote(randomQuote.text);
    setIsLoading(false);
  }

  /**
   * Randomly selects a quote from the stored quotes array.
   * @returns {Object} - A single quote object.
   */
  function getRandomQuote() {
    return apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  }

  /**
   * Extracts or assigns a default author from a quote object.
   * @param {Object} randomQuote - The quote object from which to extract the author.
   * @returns {string} - The name of the author or 'Unknown' if not specified.
   */
  function handleAuthor(randomQuote) {
    return randomQuote.author || 'Unknown';
  }

  /**
   * Opens a new window to allow tweeting the current quote.
   * @returns {void} - Opens a Twitter URL with the current quote and author pre-filled.
   */
  function handleTweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
  }

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
