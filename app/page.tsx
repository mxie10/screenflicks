import HeroSection from "./component/HeroSection";
import FeaturedFilms from "./component/featuredFilms/FeaturedFilms";

export default function Home() {

  const ExploreMore = () => {
    return (
      <div 
        className='
            bg-black 
            p-4 
            font-bold 
            rounded-lg 
            flex 
            items-center 
            justify-center 
            mt-10 
            w-1/6 
            text-white
          '
      >
        Explore More
      </div>
    )
  }

  return (
    <div
      className='
          max-w-[2520px] 
          mx-auto
        '
    >
      <HeroSection />
      <div className="px-9 mt-10">
        <FeaturedFilms />
        <FeaturedFilms />
        <FeaturedFilms />
      </div>
      <div className="flex items-center justify-center">
        <ExploreMore/>
      </div>
    </div>
  );
}
