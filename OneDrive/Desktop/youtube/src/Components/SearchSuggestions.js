import { useDispatch, useSelector } from "react-redux";
import { AddSearchQuery } from "../Utils/DataSlice";

const SearchSuggestions=()=>{
    const SearchData=useSelector(store=>store.data.searchSuggestionsData);
    const dispatch=useDispatch();
    return SearchData &&(
        <div className="bg-white text-black p-2 rounded-xl cursor-pointer">
            {SearchData.map((data,index)=><h3 className="p-1 font-sans" key={index} 
            onClick={()=>dispatch(AddSearchQuery(data))}>{data}</h3>)}
        </div>
    )
};
export default SearchSuggestions;