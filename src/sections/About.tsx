

'use client';
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import BookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavaScript from '@/assets/icons/square-js.svg';
import HTML from '@/assets/icons/html5.svg';
import CSS from '@/assets/icons/css3.svg';
import React from '@/assets/icons/react.svg';
import Chrome from '@/assets/icons/chrome.svg';
import Github from '@/assets/icons/github.svg';
import TechIcon from "@/components/TechIcon";
import mapImage from '@/assets/images/Kajjansi-Google-Maps.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from 'react';
import bible from '@/assets/images/Bible-cover.jpg';
//import Dare from '@/assets/images/Dare-to-lead.png';
import RichDad from '@/assets/images/Rich-Dad.jpg';
import sevenHabbits from '@/assets/images/seven-habbits1.jpg';
import Thinking from '@/assets/images/Thinking.jpg'
import people from '@/assets/images/People.jpg'


const toolboxItems = [
  {
    title: 'javaScript',
    iconTypes: JavaScript,
  },
  {
    title: 'HTML',
    iconTypes: HTML,
  },
  {
    title: 'CSS3',
    iconTypes: CSS,
  },
  {
    title: 'React',
    iconTypes: React,
  },
  {
    title: 'Chrome',
    iconTypes: Chrome,
  },
  {
    title: 'Github',
    iconTypes: Github,
  },
];

const hobbies = [
  {
    title: 'Travel',
    emoji: '🌍',
    left: '-4%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '55%',
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '52%',
    top: '36%',
  },
  {
    title: 'Friends',
    emoji: '👥',
    left: '55%',
    top: '66%',
  },
  {
    title: 'Exersice',
    emoji: '🏋️',
    left: '-4%',
    top: '66%',
  },
  {
    title: 'Movies',
    emoji: '🎥',
    left: '-4%',
    top: '36%',
  },
  {
    title: 'Love',
    emoji: '💘',
    left: '-4',
    top: '87%',
  },
];

const AboutSection = () => {
  const constraintRef = useRef(null);
  const bookImages = [BookImage, RichDad, sevenHabbits,people, bible, Thinking]; // Replace with actual paths
  const [currentBookImageIndex, setCurrentBookImageIndex] = useState(0);

  const nextBookImage = () => {
    setCurrentBookImageIndex((prevIndex) => (prevIndex + 1) % bookImages.length);
  };

  const prevBookImage = () => {
    setCurrentBookImageIndex((prevIndex) => (prevIndex - 1 + bookImages.length) % bookImages.length);
  };

  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My Word"
          description="Learn more about who I am, What I do and What inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className=" grid md:grid-cols-2 lg:grid-cols-2  gap-8">
            <Card className=" h-[370px] md:h-[320px] p-8 flex flex-col w-80  lg:w-full">
              <CardHeader
                title="My favorite Books"
                description="Explore the book changing my perspective on life 🤗."
              />
              <div className="w-40 mx-auto mt-3 relative">

              <AnimatePresence mode="wait">
  <motion.div
    key={currentBookImageIndex} // Ensures animation triggers on change
    className="size-full relative" // Ensure relative positioning
    initial={{ opacity: 0, x: 50, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    //exit={{ opacity: 0, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1.6 }}
  >
    <Image // Regular <img> to avoid Next.js <Image> issues
      src={bookImages[currentBookImageIndex]}
      alt={`Book cover ${currentBookImageIndex + 1}`}
      width={200}
      height={400}
      className="size-full"
    />
  </motion.div>
</AnimatePresence>


                {bookImages.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevBookImage}
                      className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 bg-none "
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      whileHover={{ scale: 1.2, x: [-5, 5, -5, 0] }}
                      transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1 }}
                    >⬅️
                    </motion.button>
                    <motion.button
                      onClick={nextBookImage}
                      className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 bg-none "
                      initial={{ x: 50, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                      whileHover={{ scale: 1.2, x: [5, -5, 5, 0] }}
                       transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
                    >
                      ➡️
                    </motion.button>
                  </>
                )}
              </div>
            </Card>

            <Card className="h-[320px] p-8 flex flex-col w-80 lg:w-full">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital Experiences 😎."
                className="px-4 pt-4"
              />
              <ToolboxItems Items={toolboxItems} className=" mt-6 " itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]" />
              <ToolboxItems
                Items={toolboxItems}
                className="mt-2 w-full h-full object-contain"
                itemsWrapperClassName=" animate-move-right [animation-duration:15s] hover:[animation-play-state:paused]"
              />
            </Card>
          </div>

          <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="h-[320px] p-8 flex flex-col w-80 lg:w-full">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm. 😀"
                className="px-4 py-4"
              />
              <div className="relative flex-1 py-2 " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute hover:animate-pulse"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-gray-950 ">{hobby.title}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 flex flex-col w-80 lg:w-full">
              <CardHeader
                title="Straight Outa Kajjansi"
                description="Where my ideas take root, let's connect and grind👌."
                className="px-4 py-4"
              />
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top " />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 py-0 my-12 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling memoji" className="size-15" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
