function Quote({ quote, author }) {
  return (
    <>
      <div className='quote-text'>
        <i className='fas fa-quote-left'></i>
        <span id='quote'>{quote}</span>
        <i className='fa-solid fa-quote-right'></i>
      </div>
      <div className='quote-author'>
        <span id='author'>{author || 'Unknown'}</span>
      </div>
    </>
  );
}

export default Quote;
