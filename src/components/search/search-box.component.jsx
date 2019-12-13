import React from 'react';
import './search-box.styles.css'


// function SearchBox(){
//     return 
// }
export const SearchBox = props =>(
    <input className='search-box' type="search" name="" id="" value={props.keywords} onChange={(e)=>{props.handleSearch(e.target.value)}}/>)