import    Navbar      from    './components/Navbar/Navbar';
import    Home        from    './components/Home/Home';
import    HomeBookNow    from    './pages/Booknow/HomeBookNow';
import    HomeAboutUs   from    './pages/AboutUs/HomeAboutUs';
import    HomeContactUs  from    './pages/ContactUs/HomeContactUs';
import    HomeService    from    './pages/Service/HomeService';
import    {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <body> 
  
      <Router>
        <Navbar/> 
        <Switch>
            <Route exact  path='/'          component={Home}/> 
            <Route path='/home-about-us'   exact component={HomeAboutUs}/>
            <Route path='/home-contact-us' exact component={HomeContactUs}/>
            <Route path='/home-service'   exact component={HomeService}/> 
            <Route path='/home-book-now'    exact component={HomeBookNow}/> 
        </Switch>
      </Router>
    </body>
  )
}

export default App
