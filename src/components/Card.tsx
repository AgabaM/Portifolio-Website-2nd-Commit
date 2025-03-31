import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import tvMerge, { twMerge } from 'tailwind-merge'
const Card = ({ 
  className, 
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {

  return (
    <div>
      <div 
        className={twMerge(`bg-gray-800 rounded-3xl 
          relative z-0 overflow-hidden after:z-10 
          after:content-[''] after:absolute after:inset-0 
          after:outline-2 after:outline after:-outline-offset-2 
          after:rounded-3xl after:outline-white/20 
          after:pointer-events-none px-8 pt-8 mx-0
          md:pt-7 md:px-0 lg:pt-4 lg:px-0 ${className || ''}`)}
          {...other}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover" }}
        />
        {children}
      </div>
    </div>
  );
}

export default Card;
