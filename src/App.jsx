import Navbar from "@/SearchComponent/pages/header/Navbar"
import Render from "@/SearchComponent/pages/main/renderCategory"
import {Routes,Route,Outlet} from "react-router-dom";
import Home from "@/SearchComponent/pages/main/Home"
import Details from "./SearchComponent/pages/main/details";

function App(){
  return(
  <div className="w-screen min-h-screen flex flex-col items-center bg-[oklch(54.2%_0.034_322.5)]">
  <Navbar/>
  <main className="bg-[] w-[80vw] p-3.5 flex justify-center min-h-[80%]">
  <Routes>
    <Route element={<Outlet/>}>
    <Route index element={<Home/>}/>
    <Route path="/categories/:id" element={<Render/>}/>
    <Route path="/detail/:id" element={<Details/>}/>
    </Route>
  </Routes>
  </main>
  </div>
  );
}
export default App;