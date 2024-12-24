
import { ReactLenis } from 'lenis/react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Review from "./Component/Review";
import Skills from "./Component/Skills";
import Work from "./Component/Work";

const App = () => {
  useGSAP(()=>{
    const elements =gsap.utils.toArray(".reveal-up");
    elements.forEach((element)=>{
      gsap.to(element,{
      ScrollTrigger:{
        trigger:element,
        start:'-200 bottom',
        end:'bottom 80%',
        scrub:true,
        markers:true
      },
      y:0,
      opacity:1,
      duration:1,
      ease:'power2.out'
    })
    })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
        <Footer/>
      </main>
    </ReactLenis>
  );
};
export default App;
