
import { Link } from "react-router-dom";
import ProfileCard from "@/components/ui/profilecard";
function Layout({data}){
const img='https://image.tmdb.org/t/p/w500/';

    return(
        <> 
        {data.results?.map((x)=>{
return <div className=" h-[calc(80% - 300px)] flex flex-col justify-center w-[calc(100% - 25%)] border-white" key={x.id}>
    <Link to={`/detail/${x.id}`}>
      <ProfileCard
   name={x.title}
   title={x.original_title}
  handle={false}
  status={false}
  contactText={false}
  avatarUrl={`${img}${x.poster_path}`}
  iconUrl={false}
  holo={0.85}
  glare={0.45}
  tiltStrength={16}
  parallax={1}
  radius={26}
  enableTilt={false}
  intro={false}
  showUserInfo={false}
  enableMobileTilt={false}
  theme="dark"
  onContactClick={false}
  />
    </Link>
</div>
        })}
       
        </>

    );
}
export default Layout;