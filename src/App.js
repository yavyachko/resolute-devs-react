import Benefits from './components/Benefits/Benefits';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import WebIntro from './components/WebIntro/WebIntro';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Portfolio from './components/Portfolio/Portfolio';
import FormBlock from './components/FormBlock/FormBlock';
import Footer from './components/Footer/Footer';
import { useRef } from 'react';
function App() {
  const servicesRef = useRef()
  const benefitsRef = useRef()
  const progressbarRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()
  return (
    <>
      <Header 
        servicesRef={servicesRef}
        benefitsRef={benefitsRef}
        progressbarRef={progressbarRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef} />
      <main>
        <WebIntro />
        <Services sectionRef={servicesRef}/>
        <Benefits sectionRef={benefitsRef}/>
        <ProgressBar sectionRef={progressbarRef}/>
        <Portfolio sectionRef={portfolioRef}/>
        <FormBlock sectionRef={contactRef}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
