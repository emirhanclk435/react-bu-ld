
import { useAthome } from "@/Apis/Home/home";
import Layout from "@/SearchComponent/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSearchParams} from "react-router-dom";

function Home(){
    const buttonCount=[1,2,3,4,5,6,7];
   const[count,setCount]=useState(1);  
   const[searchParams]=useSearchParams();
   const query=searchParams.get("query");
 const ctrl= query ? `https://api.themoviedb.org/3/search/movie?query=${query}&page=${count}`:
  `https://api.themoviedb.org/3/movie/popular?page=${count}`;
  

    const{data,isLoading,error}=useAthome(ctrl);
    if(error) return <h3>error at home</h3>
    if(isLoading) return <h2>isLOADİNG</h2>
    return(
   <div className="h-full p-4 mt-5 gap-y-3.5 gap-x-1.5 bg-gray-700 min-w-[87%] grid grid-cols-4">
    <Layout data={data}/>
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
export default Home;
