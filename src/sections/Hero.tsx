import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SpakleIcon from '@/assets/icons/sparkle.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import HeroOrbit from '@/components/HeroOrbit';

const Hero = () => {
  return (
  <div className="relative w-full py-32 md:py-48 lg:py-68 z-0 overflow-x-hidden"> {/* Added background color for better contrast */}
   <div className='absolute inset-0  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-hidden' >
  <div className='absolute inset-0 -z-30 opacity-5  ' 
    style={{backgroundImage: `url(${grainImage.src})`}}></div>
    <div className='size-[620px] hero-ring'>
    </div>
    <div className='size-[820px] hero-ring'>
    </div>
    <div className='size-[1020px] hero-ring'>
    </div>
    <div className='size-[1220px] hero-ring'>
    </div>
  
   
 
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-8 text-emerald-300/20 " />
    </HeroOrbit>

    <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-5 text-emerald-300/20 " />
    </HeroOrbit>

    <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-10 rounded-full text-emerald-300/20 " />
    </HeroOrbit>

    <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-10 text-emerald-300/20 " />
    </HeroOrbit>

    <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
      <StarIcon className="size-12 text-emerald-300 " />
    </HeroOrbit>

    <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
      <StarIcon className="size-8 text-emerald-300 " />
    </HeroOrbit>


    <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-7 rounded-full text-emerald-300/20 " />
    </HeroOrbit>

    <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-14 text-emerald-300/20 " />
    </HeroOrbit>

    <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='6s'>
      <SpakleIcon className="size-90 rounded-full text-emerald-300/20 " />
    </HeroOrbit>

     
    <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
      <StarIcon className="size-28 text-emerald-300 " />
    </HeroOrbit>

    

    
    </div> 
      <div className="container  mx-auto max-w-screen-xl px-4"> {/* Centered content using container and mx-auto */}

     {/* <h2 className="mt-8 text-5xl sm:text-5xl font-extrabold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-500 text-transparent bg-clip-text text-center drop-shadow-md">
  Mosh Labs
</h2>*/}
         
<div className="relative flex flex-col items-center">
  {/* Ensures items are centered within the container */}
  <Image
    src={memojiImage}
    width={100}
    height={100}
    className="mb-8 lg:w-60 lg:h-60"
    alt="Person peeking from behind laptop"
  />
  {/* Added margin bottom and fixed width/height for image */}
  <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mb-6">
    {/* Added margin bottom */}
    <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
      <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
    </div>
    {/* Fixed size with w-2.5 and h-2.5 */}
    <div className="text-sm lg:text-2xl font-semibold text-white">
      Available for new projects
    </div>
    {/* Text color adjusted for visibility */}
  </div>
  <div className="max-w-lg mx-auto lg:px-0">
    <h1 className="text-3xl font-bold lg:text-5xl md:text-5xl text-center lg:w-full font-serif mb-4 md:text-lg tracking-wide">
      Building Exceptional User Experiences
    </h1>
    {/* Added styling and margin bottom */}
    <p className="text-lg mb-8 lg:text-1xl leading-relaxed mt-4 text-center text-white/60">
      I specialize in transforming designs into functional, high-performing web
      applications. Let&apos;s discuss your next project.
    </p>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full pointer-events-auto">
  <button className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 rounded-xl w-full md:w-auto md:mt-3 lg:mt-3">
    <span className="font-semibold">Explore My Work</span>
    <ArrowDown className="h-6 w-6" />
  </button>
  <button className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl w-full md:w-auto">
    <span className="font-sans">👋</span>
    <span className="font-semibold">Let&apos;s Connect</span>
  </button>
</div>

</div>

     
           </div>
        </div>

      
      
    
  
    
  );
};

export default Hero;
