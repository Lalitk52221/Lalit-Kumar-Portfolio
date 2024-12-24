
const aboutItems = [
    {
      label: 'Project done',
      number: 10
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];

const About = () => {
  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] text-justify">
                Welcome! I&apos;m Lalit Kumar, a passionate web developer dedicated to transforming ideas into beautifully crafted websites. With a strong command of the MERN stack and a creative approach to design, I specialize in building responsive, high-performance, and user-friendly web solutions. My mission is to bring your vision to life through clean code, innovative designs, and seamless functionality. Let’s create something amazing together!
                 </p>
                 <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                    {aboutItems.map(({label,number},key)=>(
                        <div key={key}>
                            <div className="flex items-center md:mb-2 ">
                                <span className="text-2xl font-semibold md:text-4xl ">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400 ">{label}</p>
                        </div>
                    ))}
                    <img 
                    src="./images/logo.svg" 
                    width={30}
                    height={30}
                    alt="Logo" 
                    className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                 </div>
            </div>
            </div></section>
  )
}

export default About