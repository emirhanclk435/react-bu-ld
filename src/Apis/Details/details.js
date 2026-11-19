import {useQuery} from "@tanstack/react-query";
import { openserver } from "../Template";
export const useGenres=(w)=>{

    return useQuery({
  queryKey:['genres',w],
  queryFn:()=> openserver(w),
  staleTime:1000*50*400,
    });
};
