import PropTypes from 'prop-types';

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
