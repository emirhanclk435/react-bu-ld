import { useQuery } from "@tanstack/react-query";
import { openserver } from "../Template";

export const useAthome=(e)=>{
    return useQuery({
    queryKey:["home",e],
    queryFn:()=>openserver(e),
    staleTime:1000*60*400,
    });
};