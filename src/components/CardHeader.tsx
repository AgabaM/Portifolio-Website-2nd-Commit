import StarIcon from '@/assets/icons/star.svg'
//import BookImage from '@/assets/images/book-cover.png'
import Image from "next/image"
import { twMerge } from 'tailwind-merge';
const CardHeader = ({title, description, className}:{
    title: string;
    description: string;
    className?: string;

}) => {
  return (
    <div>
       <div className={twMerge("flex flex-col px-10", className)}>
        <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emarld-300"/>
        <h3 className="font-serif sm:text-lg md:text-lg lg:text-3xl whitespace-nowrap">{title}</h3>
        </div>
        <p className="text-sm text-white/60 mt-2 ">{description}</p>
       
      </div>  
    </div>
  )
}
export default CardHeader