import './App.css';
import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { Contact } from './components/contact';
import JsonData from './data/data.json';

const App = () =>{
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
      setLandingPageData(JsonData)
    }, [])
  
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features}/>
        <About data={landingPageData.About}/>
        <Services data={landingPageData.Services}/>
        <Gallery />
        <Testimonials data={landingPageData.Testimonials} />
        <Contact data={landingPageData.Contact} />
      </div>
    )
}

export default App;
