const SectionHeader = ({title, eyebrow, description,}:{
    title: string;
    eyebrow: string;
    description: string;
} ) => {
  return (
    <div>
     <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r text-3xl
       from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
        {eyebrow}</p>
      </div>
      <h2 className="font-serif text-3xl   text-center mt-6">
        {title}</h2>
      <p className="text-center md:text-lg lg:text-xl text-wight/60 mt-4 mx-auto">
        {description} </p>

    </div>
  )
}
export default SectionHeader