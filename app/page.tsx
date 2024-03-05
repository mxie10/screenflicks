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
            w-5/6
            lg:w-1/6 
            md:w-2/6
            sm:w-1/2
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
      <div className="w-full">
        <HeroSection />
      </div>
      <div 
        className='
          px-2
          md:px-5
          lg:px-14 
          mt-4
        '
      >
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
