import ReviewCard from "./ReviewCard";
import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';



const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Kiara Foujdar',
      imgSrc: './images/people-1.jpg',
      company: ''
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Nitesh Kumar',
      imgSrc: './Review/nitesh.jpg',
      company: ''
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Sahil Baisla',
      imgSrc: './Review/sahil.jpg',
      company: ''
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Gaurav Kumar',
      imgSrc: './Review/gaurav.png',
      company: ''
    },
    // {
    //   content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    //   name: 'Prashant Raghav',
    //   imgSrc: './images/people-5.jpg',
    //   company: ''
    // },
    // {
    //   content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    //   name: 'Jonathan',
    //   imgSrc: './images/people-6.jpg',
    //   company: 'Skyline Digital'
    // }
  ];

const Review = () => {

  useGSAP(()=>{
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'.scrub-slide',
        scrub:true,
        start:"-10% 80%",
        end:"400% 80%",
      },
      x:'-1000'
    })
  })

  return (
    <section id="reviews" className="section overflow-hidden">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                What Our Customer Say
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content,name,imgSrc,company},key)=>(
                    <ReviewCard key={key} content={content} name={name} imgSrc={imgSrc} company={company} />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Review