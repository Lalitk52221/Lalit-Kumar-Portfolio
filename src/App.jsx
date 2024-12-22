import About from "./Component/About"
import Header from "./Component/Header"
import Hero from "./Component/Hero"
import Skills from "./Component/Skills"

const App = ()=>{
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>
    </>
  )
}
export default App