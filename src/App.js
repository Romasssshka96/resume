import Greeting from './components/greeting/greeting';
import CountOfProject from './components/countOfProjects/countOfProject';
import WhyMe from './components/whyMe/whyMe';
import Portfolio from './components/portfolio/portfolio';
import FeedBack from './components/feedback/feedBack';
import Price from './components/price/price';
import IntrestedMe from './components/intrestedMe/intrestedMe';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <>    
      <Greeting/>
      <CountOfProject/>
      <WhyMe/>
      <Portfolio/>
      <FeedBack/>
      <Price/>
      <IntrestedMe/>
      <Footer/>
    </>

  );
}

export default App;
