import {useGenres} from "@/Apis/Details/details";
import { useParams } from "react-router-dom";
import ProfileCard from "@/components/ui/profilecard";
import { Link } from "react-router-dom";

function Genres(){
    const{id}=useParams();
const img='https://image.tmdb.org/t/p/w500/';
const{data,isLoading,error}=useGenres(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`);
if(error) return <h3>error</h3>
if(isLoading) return <h2>isLoading</h2>

const array=data?.results.map((x)=>{
    return{
        image:`${img}${x.backdrop_path}`,
        title:x.title,
        overview:x.overview,
        vote_average:x.vote_overage,
        id:x.id
    }
});
    return(
   <div className="h-full w-full gap-y-5 gap-x-1.5 p-1.5 grid grid-cols-4">
{array?.map((x)=>{

 return <div key={x.id}>
   <Link to={`/detail/${x.id}`}>
   <ProfileCard
  key={x.id}
  name={x.title}
  title={x.overview}
  status={false}
  handle={false}
  contactText="go to detail"
  avatarUrl={x.image}
  iconUrl={false}
  holo={0.05}
  glare={1}
  tiltStrength={21}
  parallax={10}
  radius={17}
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
export default Genres;