'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useHeros } from '../hooks/useHeros'
import { Button } from '@/components/ui/button';
import { FaPlayCircle } from "react-icons/fa";

interface PageProps {
  offset: number;
  imageSrc: string;
  onClick?: () => void;
  actors: Array<string>;
  title: string;
}

interface Hero {
  title: string
  imageSrc: string;
  actors: Array<string>;
}

const HeroSection = () => {
  const parallax = useRef<IParallax>(null)
  const [slideIndex, setSlideIndex] = useState(0);
  const { heros } = useHeros();


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSlideIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % heros.length;
        scroll(newIndex);
        return newIndex;
      });
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, [slideIndex, heros.length]);

  const scroll = (index: number) => {
    setSlideIndex(index % heros.length);
    parallax.current?.scrollTo(index % heros.length)
  }

  const Page = ({ offset, imageSrc, title, actors, onClick }: PageProps) => (
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <Image
        src={imageSrc}
        alt="My Image"
        layout="fill"
        className='brightness-50'
      />
      <div
        className='
              z-50 
              relative
              ml-20
              mt-56
              flex
          '
      >
        <div className='flex flex-col gap-1'>
          <div className='flex flex-row items-center gap-2 py-2'>
            <div className='text-4xl text-white'>{title}</div>
            <Button className='text-lg p-4 rounded-lg'>
              <FaPlayCircle />
              <span className='ml-2' onClick={() => { }}>Play Now</span>
            </Button>
          </div>
          <div className='text-md text-white p-2 flex flex-row gap-2'>
            {actors && actors.map((actor) => {
              return (
                <div key={actor}>{actor}</div>
              )
            })}
          </div>
        </div>

      </div>
    </ParallaxLayer>
  )

  const IndexBar = () => {
    return (
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
            mt-96
            rounded-lg
          '
        >
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <div
                className={` w-3 h-3 rounded-full cursor-pointer ${slideIndex === index ? 'bg-white' : ' bg-slate-700'}`}
                key={index}
                onClick={() => scroll(index)}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='h-108 relative'>
      <Parallax ref={parallax} pages={5} horizontal>
        {heros.map((item: Hero, index: number) => {
          return (
            <Page
              key={index}
              offset={index}
              imageSrc={item.imageSrc}
              title={item.title}
              actors={item.actors}
            />
          )
        })}
      </Parallax>
      <IndexBar/>
    </div>
  )
}

export default HeroSection;
