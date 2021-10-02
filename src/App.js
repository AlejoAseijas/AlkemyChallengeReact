import LogIn from "./pages/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  
  return (
   <>
   <Router>
    <Switch>
      <Route exact path='/'> <LogIn></LogIn> </Route>
    </Switch>
   </Router>
  
   </>
  );
}

export default App;
