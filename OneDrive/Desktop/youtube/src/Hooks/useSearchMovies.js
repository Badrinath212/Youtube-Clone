import { useDispatch } from "react-redux";
import { API_KEY } from "../Utils/constants"
import { AddData } from "../Utils/DataSlice";

const useSearchMovies=(SearchText)=>{
    const dispatch=useDispatch();
    const SearchMovies=async ()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q="+SearchText+"&maxResults=50&key="+API_KEY);
        const json=await data.json();
        console.log(json);
        dispatch(AddData(json));
    }
    SearchMovies();
}

export default useSearchMovies;