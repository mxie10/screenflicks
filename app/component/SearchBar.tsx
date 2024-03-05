import React from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div 
        className='
            ml-2
            lg:ml-10 
            flex 
            flex-row 
            items-center 
            relative
        '
    >
        <input 
            type="text" 
            placeholder="Explore the Cinematic World" 
            className='p-2 rounded-md w-64 pl-9 text-sm' 
        />
        <FaSearch size={20} className='absolute ml-2'/>
</div>
  )
}

export default SearchBar;
