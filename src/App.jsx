import { BrowserRouter } from 'react-router-dom'
import { Contact, Navbar, StarsCanvas, Hero, RingSection } from "./components"
import First from './components/First'
import Footer from './components/Footer'
import Man from './components/ManSection'
const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='bg-primary bg-cover bg-no-repeat bg-center relative z-0'>
          <Hero />
          <StarsCanvas />
        </div>
        <Man />
        <First />
        <RingSection />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
