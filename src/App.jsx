import './App.css';
import MainTitle from './components/MainTitle';
import BodySection from './components/BodySection';
import FooterSection from './components/FooterSection';
import FunnyIntro from './components/aboutMe/FunnyIntro';

function App() {
  return (
    <>
    <MainTitle />
    <FunnyIntro/>
    <div className='border-black border-2 ml-6 mr-6'>
      <BodySection/>
      <FooterSection/>
    </div>
    </>
  );
}

export default App;
