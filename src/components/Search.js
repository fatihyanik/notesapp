import React from 'react'
import { MdSearch } from 'react-icons/md'
{/*this is our search component
here am using the handleSearchNote as props and we are going to use this
as our onClick event function for searching (this actual function has been defined in App.js)*/}

function Search({handleSearchNote}) {
  return (
    <div className='search'>
       {/*this is our search icon within our search bar and I have fixed it's size to 1.3em*/}
        <MdSearch className="search-icons" size="1.3em" />
          {/*this is the input tag for our search and here , I have used some onClick events for searching*/}
        <input onChange={(e) => handleSearchNote(e.target.value)} type="text" placeholder='type to search...' />
    </div>
  )
}

export default Search