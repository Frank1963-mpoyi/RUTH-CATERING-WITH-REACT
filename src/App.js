import                      './App.css';
import  Navbar      from    './components/Navbar';
import  Car         from    './components/Car';
import  About       from    './components/About';
import  Card        from    './components/Card';
import  Menu        from    './components/Menu';
import  SocialIcon  from    './components/SocialIcon';
import  Gallery     from    './components/Gallery';
import  Footer      from    './components/Footer';
import  Aboutus     from    './Aboutus';
import  Contactus   from    './components/Contactus';
import  Service     from    './components/Service';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <body>
      <Router>
        <Navbar />    
        <Car />
        <About />
        <Card />
        <Menu />
        <SocialIcon />
        <Gallery/>
        <Footer />
        <Service/>

        <Switch>
          <Route path="/about/"  component={Aboutus}/>  
          <Route path="/contact/" component={Contactus}/>
          <Route path="/service/" component={Service}/>
      </Switch>
      </Router>
      
    </body>
  )
}

export default App
