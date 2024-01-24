import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {
  

  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
    </div>
  )
}

export default App
