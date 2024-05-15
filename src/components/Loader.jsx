/**
 * Displays a loading animation. Useful for indicating that a process is in progress.
 * This component can be used in various parts of the application where a loading state needs to be shown.
 *
 * @component
 * @example
 * return (
 *   <Loader />
 * );
 */
function Loader() {
  return <div className='loader' id='loader'></div>;
}

export default Loader;
