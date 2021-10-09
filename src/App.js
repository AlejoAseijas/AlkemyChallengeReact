import React,{useEffect, useState} from "react";
import LogIn from "./pages/LogIn";
import Home from './pages/Home'
import SearchHero from './components/SearchHero'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuth(true)
    }else{
      setAuth(false)
    }
  }, [])

  return (
   <>
     <Router>
    <Switch>
      {auth === false ?
         <Route exact path='/'>
           <LogIn setAuth={setAuth} />
        </Route>
         :
         <Route exact path='/'>
           <Home setAuth={setAuth} />
        </Route>
    }
    <Route exact path='/search'>
          <SearchHero></SearchHero>
    </Route>
    </Switch>
   </Router>

 

  
   </>
  );
}

export default App;
