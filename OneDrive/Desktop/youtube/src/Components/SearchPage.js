import React from 'react'
import SearchCard from './SearchCard';
import { useSelector } from 'react-redux';


const SearchPage = () => {
  const data=useSelector(store=>store.data.searchData);
  return data && (
    <div>
        <div className='pl-24 mt-[10px] ml-36 cursor-pointer'>
          {data.map((t)=><SearchCard key={t.id} info={t}/>)}
        </div>
    </div>
  )
}

export default SearchPage;