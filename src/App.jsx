import About from "./Component/About"
import Header from "./Component/Header"
import Hero from "./Component/Hero"
import Skills from "./Component/Skills"
import Work from "./Component/Work"

const App = ()=>{
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
      </main>
    </>
  )
}
export default App