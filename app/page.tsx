import Image from "next/image";
import HeroSection from "./component/HeroSection";
import testImage from './public/images/1.jpg';

export default function Home() {
  return (
    <div
      className='
          max-w-[2520px] 
          mx-auto
        '
    >
        <HeroSection/>
        {/* <Image src={testImage} alt="My Image" width={300} height={200} /> */}
    </div>
  );
}
