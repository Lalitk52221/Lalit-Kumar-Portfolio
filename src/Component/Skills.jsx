import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "./images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "./images/Next.js.png",
    label: "Next.js",
    desc: "Framework",
  },

  {
    imgSrc: "./images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "./images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "./images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "./images/Html.png",
    label: "HTML",
    desc: "Web Structure",
  },
  {
    imgSrc: "./images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "./images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "./images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];
const OtherskillItem = [
  {
    imgSrc: "./images/Illustrator.png",
    label: "Illustrator",
    desc: "Design tool",
  },
  {
    imgSrc: "./images/coreldraw.png",
    label: "CorelDRAW",
    desc: "Design tool",
  },
  {
    imgSrc: "./images/canva.png",
    label: "Canva",
    desc: "Design tool",
  },
  {
    imgSrc: "./images/Photoshop.png",
    label: "Photoshop",
    desc: "Image Editing",
  },
  {
    imgSrc: "./images/office.png",
    label: "MS Office Advance",
    desc: "Productivity",
  },
  {
    imgSrc: "./images/filmora.png",
    label: "Filmora",
    desc: "Video Editing",
  },
  {
    imgSrc: "./images/Tally.png",
    label: "Tally Prime",
    desc: "Accounting",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h2 className="headline-3  reveal-up mt-5">
          Other Tools & Skills I Possess
        </h2>
        {/* <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Along with web development tools, I have expertise in various other tools that enhance productivity, creativity, and efficiency.
            </p> */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {OtherskillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
