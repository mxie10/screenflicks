import HeroSection from "./component/HeroSection";
import FeaturedFilms from "./component/featuredFilms/FeaturedFilms";

export default function Home() {
  return (
    <div
      className='
          max-w-[2520px] 
          mx-auto
        '
    >
        <HeroSection/>
        <div className="px-9 mt-10">
          <FeaturedFilms/>
        </div>

        <div className="mt-20">This is footer!!!!</div>
    </div>
  );
}
