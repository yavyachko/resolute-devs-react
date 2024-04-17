import BenefitItem from './components/BenefitItem/BenefitItem';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import WebIntro from './components/WebIntro/WebIntro';

function App() {
  return (
    <>
      <Header />
      <main>
        <WebIntro />
        <Services />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <BenefitItem
                    heading={"Cutting-Edge Design"}
                    number={"05"}>
                    Our team of skilled designers and developers work hand-in-hand to craft visually stunning and user-friendly websites. We stay ahead of the latest trends to ensure your website stands out.
        </BenefitItem>
      </main>
    </>
  );
}

export default App;
