'use client'

import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useHeros } from '../hooks/useHeros'

interface PageProps {
  offset: number
  imageSrc: string
  onClick: () => void
}

interface Hero {
  title:string
  imageSrc: string;
}

const Page = ({ offset, imageSrc, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <Image
        src={imageSrc}
        alt="My Image"
        layout="fill"
        className='brightness-50'
      />
    </ParallaxLayer>
  </>
)

const HeroSection = () => {
  const parallax = useRef<IParallax>(null)
  const [slideIndex, setSlideIndex] = useState(0);
  const {heros} = useHeros();

  const scroll = (index: number) => {
    if(index === heros.length){
      setSlideIndex(0);
    }else{
      setSlideIndex(index);
    }
    if (parallax.current) {
      if(index === heros.length){
        parallax.current.scrollTo(0)
      }else{
        parallax.current.scrollTo(index)
      }
    }
  }

  return (
    <div className='h-72'>
      <Parallax ref={parallax} pages={5} horizontal style={{ height: '50%' }}>
        {heros.map((item:Hero, index:number) => {
          return (
            <Page
              key={index}
              offset={index}
              onClick={() => scroll(index + 1)}
              imageSrc={item.imageSrc} 
            />
          )
        })}
      </Parallax>
      <div className='flex justify-center'>
        <div
          className='
            z-10 
            absolute 
            flex 
            flex-row 
            items-center 
            justify-between 
            w-1/6
          bg-black
            py-1
            px-4
            mt-80
            rounded-lg
          '
        >
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <div 
                className={` w-3 h-3 rounded-full cursor-pointer ${slideIndex === index ? 'bg-white' : ' bg-slate-700'}`}  
                key={index}
                onClick={()=>scroll(index)}
              />
            )
          })}
        </div>
      </div>
      <div
        className='
          z-10
          absolute
        '
      >
        
      </div>
    </div>
  )
}

export default HeroSection;
