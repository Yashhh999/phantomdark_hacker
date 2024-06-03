import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

export default function Page(){
  return(
      <>

      



      <section id ="Home" >
        <Home/>
      </section >
      <section id="Projects">
        <Projects/>
      </section>
      <section id="Services">
        <Services/>
      </section>
      <section id="Contact">
        <Contact/>
      </section>
      
      

      </>
  )
}