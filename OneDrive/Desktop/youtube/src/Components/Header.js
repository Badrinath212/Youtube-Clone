import { useEffect } from "react";
import {API_KEY, HANDLER_ICON, SEARCH_ICON, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../Utils/constants"
import { useDispatch, useSelector} from "react-redux";
import { toggleHandBurger, togglesuggestions } from "../Utils/ConfigSlice";
import { AddSearchData, AddSearchQuery, AddSearchedData, RemoveSearchQuery } from "../Utils/DataSlice";
import SearchSuggestions from "./SearchSuggestions";
import { useLocation, useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const location=useLocation();
    const Query=useSelector(store=>store.data.searchQuery);
    const show=useSelector(store=>store.config.isSearchSuggestions);
    const HandleChange=()=>{
        SearchButton();
        navigate("/searchpage");
    }
    const SearchButton=async ()=>{
        const data=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+Query+"&type=video&key="+API_KEY);
        const json=await data.json();
        const filtered=json.items.filter((t)=>!t.snippet.title.toLowerCase().includes("shorts"))
        dispatch(AddSearchedData(filtered));
    }
    useEffect(()=>{
        const searchSuggestions= async ()=>{
            const data=await fetch(YOUTUBE_SEARCH_API+Query);
            const json=await data.json();
            dispatch(AddSearchData(json[1]));
        }
        const timer=setTimeout(()=>searchSuggestions(),200);
        return ()=>{
            clearTimeout(timer);
        }
    } 
    );
    useEffect(()=>{
        if(location.pathname==="/"){
            dispatch(RemoveSearchQuery());
        }
    },[location.pathname]);
    return (
        <div className=" h-24 flex justify-between bg-white fixed w-screen">
            <div className="flex ml-4">
                <img className="w-10 h-8 mt-7 opacity-80 cursor-pointer"
                onClick={()=>dispatch(toggleHandBurger())}
                 alt="logo" src={HANDLER_ICON}/>
                <img className="w-44 h-32 ml-3 -mt-5" alt="logo" src={YOUTUBE_LOGO}/>
            </div>
            <div>
                <input className="mt-6 border border-black rounded-3xl w-[500px] h-10 cursor-pointer p-2" 
                    onClick={()=>dispatch(togglesuggestions())}
                    type="text" placeholder="Search" value={Query}
                    onChange={(e)=>dispatch(AddSearchQuery(e.target.value))}/>
                <button className="absolute mt-7 -ml-11 cursor-pointer">
                <img className="w-8 h-8" alt="search" src={SEARCH_ICON}
                onClick={()=>
                HandleChange()}/></button>
                {show && <SearchSuggestions/>}
            </div>
            <div>
                <img className="w-16 h-14 mt-4 mr-4" alt="usericon" src={USER_ICON}/>
            </div>
        </div>
    )
}
export default Header;