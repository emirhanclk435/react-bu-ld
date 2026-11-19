
import { useAthome } from "@/Apis/Home/home";
import ProfileCard from "@/components/ui/profilecard";
import { Link } from "react-router-dom";

function Home(){
    const img='https://image.tmdb.org/t/p/w500/';
    const myHome='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const{data,isLoading,error}=useAthome(myHome);

    if(error) return <h3>error at home</h3>
    if(isLoading) return <h2>isLOADİNG</h2>
    return(
   <div className="h-full mt-5 gap-y-3.5 gap-x-1.5 bg-gray-700 min-w-[87%] grid grid-cols-4">
   {data?.results.map((x)=>{
    return <div className="" key={x.id}>
    <Link to={`/detail/${x.id}`}>
    
      <ProfileCard
  name={x.title}
  title={x.overview}
  handle={false}
  status={false}
  contactText="Contact"
  avatarUrl={`${img}${x.backdrop_path}`}
  iconUrl={false}
  holo={0.8}
  glare={0.5}
  tiltStrength={12}
  parallax={8}
  radius={16}
  enableTilt
  intro
  showUserInfo={false}
  enableMobileTilt={false}
  theme="dark"
  onContactClick={() => console.log('Contact clicked')}
/>
    </Link>
        </div>
   })}
   </div>
    );
}
export default Home;
