import Home from '../components/Home'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

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