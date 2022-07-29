import React from 'react'

function Search({setModal}) {
  return (
<div className='search'>
<div className="search-icon">
<i onClick={()=>setModal(false)} class="fa-solid fa-xmark"></i>
</div>
<div className="search-content">
    <div className="search-input">
        <input type="text" name="" id="" placeholder='Axtarış'/>
    </div>
</div>
</div>
  )
}

export default Search