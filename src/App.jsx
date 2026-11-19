import Navbar from "@/SearchComponent/pages/header/Navbar"
import Render from "@/SearchComponent/pages/main/renderCategory"
import {Routes,Route} from "react-router-dom";
import Home from "@/SearchComponent/pages/main/Home"
import Details from "./SearchComponent/pages/main/details";
function App(){
  return(
  <div className="w-screen h-full flex flex-col items-center bg-[#39FF14] ">
  <Navbar/>
  <main className="bg w-[80vw] flex justify-center min-h-[80%]">
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/categories/:id" element={<Render/>}/>
<Route path="/detail/:id" element={<Details/>}/>
  </Routes>
  </main>
  </div>
  );
}
export default App;