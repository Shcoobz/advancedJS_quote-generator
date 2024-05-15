import PropTypes from 'prop-types';

/**
 * Component for displaying buttons related to quote actions.
 * Provides a button to fetch a new quote and another to tweet the current quote.
 * Uses FontAwesome for the Twitter icon.
 *
 * @component
 * @example
 * return (
 *   <QuoteButtons
 *     handleNewQuote={() => fetchNewQuote()}
 *     handleTweetQuote={() => tweetCurrentQuote()}
 *   />
 * );
 */
function QuoteButtons({ handleNewQuote, handleTweetQuote }) {
  return (
    <div className='button-container'>
      <button
        className='twitter-button'
        id='twitter'
        title='Tweet This!'
        onClick={handleTweetQuote}>
        <i className='fab fa-twitter'></i>
      </button>
      <button id='new-quote' onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
}

QuoteButtons.propTypes = {
  handleNewQuote: PropTypes.func.isRequired,
  handleTweetQuote: PropTypes.func.isRequired,
};

export default QuoteButtons;
