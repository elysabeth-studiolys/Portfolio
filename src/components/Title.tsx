interface TitleProps{
    title : string 
}
const Title = ({title} : TitleProps) => {
  return (
    <div className="flex items-center justify-center">
        <h1 className="gradient-brand-text uppercase font-bold mb-5 text-4xl md:text-5xl ">
            {title}
        </h1>
    </div>
  )
}

export default Title
