import Navbar from './ui-components/Navbar';
import Navigation from './ui-components/Navigation';
import QuickAccess from './ui-components/QuickAccess';
import Hero from './ui-components/Hero';
import NoticeBoard from './ui-components/NoticeBoard';
import HonorableMembers from './ui-components/HonorableMembers';
import Resources from './ui-components/Resources';
import YoutubeVideo from './ui-components/YoutubeVideo';
import Footer from './ui-components/Footer';





function App() {

  return (
    <div className="max-w-full">
      <Navbar />
      <Navigation />
      <Hero />
      <NoticeBoard />
      <HonorableMembers />
      <Resources />
      <QuickAccess />
      <YoutubeVideo />
      <Footer />
    </div>
  )
}



export default App
