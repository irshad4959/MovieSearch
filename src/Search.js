import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery,isError}=useGlobalContext();
  return (
  <section className='search-section'>
  <h2>Search your favourite movie</h2>
  <form action='#' onSubmit={(event)=>event.preventDefault()}>
  <div>
    <input type="text" 
    placeholder='searh here' 
    value={query} 
    onChange={(event)=>setQuery(event.target.value)}/>
   </div>
  </form>
{/**Here bottom code show error on screen and console log    */}
  <div className='card-error'>
  <p>{isError.show && isError.msg  }</p>
  </div>
  </section>
  )
}

export default Search
