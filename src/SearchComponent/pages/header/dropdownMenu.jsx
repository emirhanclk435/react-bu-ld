
"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDetail } from "@/Apis/CategorytoMovies/customDetail";
import { Link } from "react-router-dom";

function Drop(){
const{data,isLoading,error}=useDetail('https://api.themoviedb.org/3/genre/movie/list?language=en');

  if(error) return <h4>Have to a problem error</h4>
  if(isLoading) return <h3>LOading</h3>
  console.log(data);

    return(
  <>
  <DropdownMenuTrigger>
  <Button className="bg-[oklch(54.2%_0.034_322.5)] border-2 border-blue-800 text-white font-bold tracking-tight" variant="outline">Categories</Button>
  <DropdownMenu className="bg-gray-600 text-white">
 {data ? data.genres.map((x)=>{
 return <DropdownMenuGroup>
  <DropdownMenuItem asChild>
  <Link key={x.id} to={`/categories/${x.id}`}>{x.name}</Link>  
  </DropdownMenuItem>
</DropdownMenuGroup>
 }) 
 : <DropdownMenuLabel>error data</DropdownMenuLabel>}
  </DropdownMenu>
</DropdownMenuTrigger>
  </>
    );
}
export default Drop;
