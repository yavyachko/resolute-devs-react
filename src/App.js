import Benefits from './components/Benefits/Benefits';
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
        <Benefits />
      </main>
    </>
  );
}

export default App;
