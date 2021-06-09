import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">  
     <Router>
        <Header />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/contact" component={Contact} />
       </Switch>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
