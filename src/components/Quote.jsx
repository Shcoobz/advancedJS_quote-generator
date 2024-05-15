import { useEffect, useRef } from 'react';

function Quote({ quote, author }) {
  const quoteTextRef = useRef(null);

  function handleQuoteLength() {
    const quoteText = quoteTextRef.current;
    quoteText.classList[quote.length > 120 ? 'add' : 'remove']('long-quote');
  }

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

export default Quote;
