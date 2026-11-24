import {useGenres} from "@/Apis/Details/details";
import Layout from "@/SearchComponent/Layout";
import { useState } from "react";
import {useParams,useSearchParams} from "react-router-dom";
import { Button } from "@/components/ui/button";

function Genres(){
 const{id}=useParams();
   const buttonCount=[1,2,3,4,5,6,7];
    const[count,setCount]=useState(1);
    const[searchParams]=useSearchParams();
    const get=searchParams.get("query");
   const trl=get.trim() !== "" ? `https://api.themoviedb.org/3/search/movie?query=${get}&page=${count}` : 
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${count}&sort_by=popularity.desc&with_genres=${id}`;

const{data,isLoading,error}=useGenres(trl);

if(error) return <h3>error</h3>
if(isLoading) return <h2>isLoading</h2>

    return(
   <div className="h-full w-full gap-y-5 gap-x-1.5 p-1.5 grid grid-cols-4">
  
  <Layout data={data} />
   
    <div className="min-w-[77em] mt-6 flex items-center gap-x-5.5 p-3">
  {buttonCount.map((x,i)=>{
   return <div key={i}>
  <Button className="text-2xl w-[48px] brightness-150 text-black tracking-tight rounded-3xl border-4 border-sky-900 shadow-2xl" onClick={()=>setCount(x)} variant="outline">{x}</Button>

    </div>
  })}
  </div>
   </div>
    );
}
export default Genres;