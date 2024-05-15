import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a quote and its author. Adjusts styling based on the quote's length.
 * This component highlights long quotes by adding a specific class.
 *
 * @component
 * @example
 * return (
 *   <Quote
 *     quote="Life is what happens when you're busy making other plans."
 *     author="John Lennon"
 *   />
 * );
 */
function Quote({ quote, author }) {
  /**
   * Reference to the DOM element displaying the quote text.
   * @type {Object}
   */
  const quoteTextRef = useRef(null);

  /**
   * Adjusts the class of the quote text based on its length.
   * Adds 'long-quote' class if the quote is longer than 120 characters, otherwise removes it.
   * @function
   * @returns {void}
   */
  function handleQuoteLength() {
    const quoteText = quoteTextRef.current;
    quoteText.classList[quote.length > 120 ? 'add' : 'remove']('long-quote');
  }

  /**
   * Effect to adjust quote text class on quote change.
   * @effect
   * @returns {void}
   */
  useEffect(
    function updateQuoteLength() {
      handleQuoteLength();
    },
    [quote]
  );

  return (
    <>
      <div className='quote-text'>
        <i className='fas fa-quote-left'></i>
        <span id='quote' ref={quoteTextRef}>
          {quote}
        </span>
        <i className='fa-solid fa-quote-right'></i>
      </div>
      <div className='quote-author'>
        <span id='author'>{author || 'Unknown'}</span>
      </div>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Quote;
