import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './index.css'
import Intro from './Intro'
import Footer from '../Footer'
import Blog from '../Components/Blog'
import Admission from '../Components/Admission'
import Result from '../Components/Result'
import Contact from '../Components/Contact'
import Home from '../Components/Home';
import Flasher from '../Add_flasher/Flasher';


export default function App(){
  return(
    <Router>
      <div className='App'>
      <Routes>
       <Route exact path='/Home' Component={Home} />
        <Route exact path='/intro' Component={Intro} />
        <Route exact path='/Blog' Component={Blog} />
        <Route exact path='/admission' Component={Admission} />
        <Route exact path='/result' Component={Result} />
        <Route exact path='/contact' Component={Contact} />
      </Routes>
      <Footer />
      </div>
    </Router>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <Flasher />
  <App />
  </React.StrictMode>,
);

