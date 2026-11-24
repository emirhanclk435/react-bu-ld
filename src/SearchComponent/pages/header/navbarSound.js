import { useState,useRef,useEffect } from "react";
import Buble from "@/assets/sounds/bubleHeader.mp3";

export const useSound=(e)=>{
const[isActive,setActive]=useState(e);
const sound=useRef(new Audio(Buble));

 
useEffect(()=>{
const handle=setInterval(()=>{

if(isActive){
    sound.current.Time = 1;
    sound.current.play();
}
if(!isActive){
    sound.current.pause();
}
},20);
return ()=> clearInterval(handle);
},[isActive]);


return{setActive};
};

