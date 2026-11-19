import {useDetail} from "@/Apis/CategorytoMovies/customDetail";
import { useParams } from "react-router-dom";
function Detail(){
    const{id}=useParams();
    const img='https://image.tmdb.org/t/p/w500/';
    const{data,isLoading,error}=useDetail(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

    if(error) return <h3>error in detail page</h3>
    if(isLoading) return <h2>isLOADİNG</h2>
    return(
 <div className="h-[50rem] rounded-4xl bg-gray-500  w-[80rem] mt-5">
<section className="border-4 min-w-full h-full border-gray-800 flex justify-center">
<div className="w-full h-full grid grid-cols-[repeat(2,1fr)] justify-center">
<div className="min-h-full border-r-8 p-3 border-white">
    <h3 className="tracking-tighter font-serif contrast-200 saturate-150"><strong>Overview:<br/>{data.overview}</strong></h3>
</div>

<div className="h-full flex border-2 gap-y-2.5 border-gray-600 flex-col">
    <div className="flex items-center justify-center">
  <img className="aspect-square w-[90%] transition duration-500 hover:grayscale-0 hover:saturate-200 object-cover rounded-2xl brightness-125 grayscale-25" src={`${img}${data.poster_path}`}/>
    </div>
 <div className="border-t-4 bg-sky-500 border-white">
 <p className="text-sky-950 saturate-150 contrast-200 tracking-wider font-extralight">{data.overview}</p>
     {data.production_countries.map((x)=>{
return <h3 className="text-xl tracking-widest">Countries:<br/><span><mark>{x.name}</mark></span></h3>
     })}
 </div>
  
</div>
</div>
</section>
 </div>
    );
}
export default Detail;