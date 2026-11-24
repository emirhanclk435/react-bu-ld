import {useDetail} from "@/Apis/CategorytoMovies/customDetail";
import { useParams } from "react-router-dom";
function Detail(){
    const{id}=useParams();
    const img='https://image.tmdb.org/t/p/original/';
    const{data,isLoading,error}=useDetail(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

    if(error) return <h3>error in detail page</h3>
    if(isLoading) return <h2>isLOADİNG</h2>
    return(
<div className="bg-black border-4 h-[90vh] flex flex-col relative mt-12 w-[90%]"> 
{/*katman layer eklemeye çalışacaz */}
<div className="absolute border-8 top-0 left-0 border-red-700 z-[-10000] opacity-40 w-full h-full"> 
    </div>
<div className="w-full  h-full z-[999999] p-4 contrast-100 flex flex-col">
    <div className="w-full h-[50%]">
 <img className="rounded-3xl border-4 border-black  saturate-100 brightness-120 aspect-[2/4] object-fill opacity-180 h-[75%] w-[100%]" src={`${img}${data.backdrop_path}`}/>
    </div>
{/*ust kısım bıtdı */}
<div className="w-full h-[50%] grid grid-cols-2">
   <div className="w-[calc(100% - 500px)] text-white tracking-tight flex flex-col items-center font-extrabold border-4 border-gray-500">
<h1 className="text-3xl">{data.original_title}</h1>
<p className="tracking-tighter font-extralight contrast-150 saturate-200"><strong>{data.overview}</strong></p>
</div> 
<div className=" w-[calc(100% - 500px)]">

    <img className="object-center contrast-150 w-full h-[500px]" src={`${img}${data.poster_path}`}/>
</div>

    </div> 
</div>
</div>
    );
}
export default Detail;