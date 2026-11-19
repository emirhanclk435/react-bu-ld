import { useQuery} from "@tanstack/react-query";
import { openserver } from "../Template";


 export const useDetail=(s)=>{

    return useQuery({
        queryKey:["detail",s],
        queryFn:()=>openserver(s),
        staleTime:1000*60*400,
    });
    
    
};

