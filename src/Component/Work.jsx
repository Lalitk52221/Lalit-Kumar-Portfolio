import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: './Project-img/Aakarshan.png',
      title: 'Institute Website',
      tags: ["Backend","JWT",'Development'],
      projectLink: 'https://aakarshan-eight.vercel.app/'
    },
    {
      imgSrc: './Project-img/Blogifyr.png',
      title: 'A Blogging Platform',
      tags: ['API',"Backend","JWT",'Development'],
      projectLink: 'https://blogifyr.vercel.app/'
    },
    {
      imgSrc: './Project-img/Digital-Market.png',
      title: 'Digital Market App',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://lalitk52221.github.io/Digital-market/'
    },
    {
      imgSrc: './Project-img/Swiggy.png',
      title: 'Swiggy Clone App',
      tags: ['API', 'SPA'],
      projectLink: 'https://lalitk52221.github.io/Swiggy-Clone/'
    },
    {
      imgSrc: './Project-img/DrikPanchang.png',
      title: 'Drik Panchang',
      tags: ['Development', 'Web-design'],
      projectLink: 'https://lalit-panchang.vercel.app/'
    },
    {
      imgSrc: './Project-img/Youtube-Clone.png',
      title: 'Youtube Clone',
      tags: ['Development', 'API'],
      projectLink: 'https://lalitk52221.github.io/Youtube-Clone/'
    },
    {
      imgSrc: './Project-img/Registration-form.png',
      title: 'Registration Form',
      tags: ['Web-design', 'Development', "Backend"],
      projectLink: 'https://registration-frontend-ima7.onrender.com/'
    },
    {
      imgSrc: './Project-img/Instagram-Clone.png',
      title: 'Instagram Clone',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://lalitk52221.github.io/Instagram-Clone/'
    },
    {
      imgSrc: './Project-img/Youtube-Analyser.png',
      title: 'Youtube Video Analyser',
      tags: ['Web-Design', 'Development'],
      projectLink: 'https://lalitk52221.github.io/youtube-video-analyser/'
    },
    {
      imgSrc: './Project-img/Tally.png',
      title: 'Tally Mock Test Quiz',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://lalitk52221.github.io/Tally-Mock-Test/'
    },
    {
      imgSrc: './Project-img/QR.png',
      title: 'QR Code Generator',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://lalitk52221.github.io/QR---Code-Generator/'
    },
    
    {
      imgSrc: './Project-img/Uber.png',
      title: 'Uber Receipt',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://lalitk52221.github.io/Uber-receipt/'
    },
    {
      imgSrc: './Project-img/TodoList.png',
      title: 'To Do List',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://lalitk52221.github.io/TO-DO-LIST/'
    },
  ];
// const works = [
//     {
//       imgSrc: './images/project-1.jpg',
//       title: 'Full stack music app',
//       tags: ['API', 'MVC', 'Development'],
//       projectLink: 'https://musify-5al0.onrender.com/'
//     },
//     {
//       imgSrc: './images/project-2.jpg',
//       title: 'Free stock photo app',
//       tags: ['API', 'SPA'],
//       projectLink: 'https://pixstock-official.vercel.app/'
//     },
//     {
//       imgSrc: './images/project-3.jpg',
//       title: 'Recipe app',
//       tags: ['Development', 'API'],
//       projectLink: ''
//     },
//     {
//       imgSrc: './images/project-4.jpg',
//       title: 'Real state website',
//       tags: ['Web-design', 'Development'],
//       projectLink: 'https://github.com/codewithsadee-org/wealthome'
//     },
//     {
//       imgSrc: './images/project-5.jpg',
//       title: 'eCommerce website',
//       tags: ['eCommerce', 'Development'],
//       projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
//     },
//     {
//       imgSrc: './images/project-6.jpg',
//       title: 'vCard Personal portfolio',
//       tags: ['Web-design', 'Development'],
//       projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
//     },
//   ];
const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work