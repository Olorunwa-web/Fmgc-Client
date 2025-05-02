import React , { useState } from 'react'
import searchs from '../assets/iconamoon_search-thin.svg';
import cancel from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import Allbrands from '../Pages/Allbrands'
const Search = ( {onSearch} ) => {

    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
  
    const handleChange = (e) => {
      const val = e.target.value;
      setSearchValue(val);
      onSearch(val);
      setIsSearching(val.length > 0);
    };
  
    const clearSearch = () => {
      setSearchValue('');
      onSearch('');
      setIsSearching(false);
    };


    return (
        <>
          <section>
              <input type="text" name="" id="" value={searchValue} onChange= {handleChange} placeholder = 'Search' className = 'w-[100%] lg:w-[250px] border-[0.5px] outline-none border-[#808080] font-poppins text-[16px] text-[#808080] lg:ps-4 ps-3 leading-[28px] rounded-[10px] h-[47px] lg:pr-10 pr-8'/>
                { isSearching ? (
                    <img src= {cancel} alt="" onClick = {clearSearch} className = 'absolute top-3 right-2  w-6'/>
                ) : (
                    <img src= {searchs} alt="" className = 'absolute top-3 right-2'/>

                )}  
          </section>
        </>
    )
}

export default Search
