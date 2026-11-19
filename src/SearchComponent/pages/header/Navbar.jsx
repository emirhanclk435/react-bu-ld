import Drop from "./dropdownMenu";
import gif from "@/assets/pictures/gif.gif";
import ElasticMesh from '@/components/ui/bubletext';
import {Input} from "@/components/ui/input"
import { Link } from "react-router-dom";

function Nav(){
  return(
<div className="border-4 border-white w-[70%] flex items-center h-20 rounded-3xl mt-11 bg-[oklch(49.6%_0.265_301.924)]">
<header className="flex items-center justify-between p-3 w-full">
<div style={{ width: '20%', height: '100px', position: 'relative' }}>
  <ElasticMesh
    text="My Favorite Animal"
    material="balloon"
    color="#1447e6"
    inflate={1.4}
    stiffness={0.9}
    wobble={0.9}
    theme="light"
  />
 
</div>
 <Link className="text-white" to="/">HOME</Link>
   <div className="flex items-center justify-between gap-x-4">
<img className="aspect-square object-cover saturate-50 brightness-150 contrast-150 max-w-16 min-h-[76%]"
src={gif}
/>

<Input className="border-4 border-black bg-white" placeholder="search to movies"/>


<Drop/>
   </div>



</header>
</div>
  );
}
export default Nav;