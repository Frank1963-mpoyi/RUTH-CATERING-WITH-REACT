import  Navbar      from    './Navbar';




// import Construction from './components/Construction/Construction';


import Home from './pages/Home';
import Booknow from './pages/Booknow';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <body> 
  
      <Router>
        <Navbar/> 
        <Switch>
            <Route exact  path='/' component={Home}/> 
            <Route path='/about-us' exact component={AboutUs}/>
            <Route path='/contact-us' exact component={ContactUs}/>
            <Route path='/services' exact component={Services}/> 
            <Route path='/booknow' exact component={Booknow}/> 
        </Switch>
      </Router>
    </body>
  )
}

export default App
