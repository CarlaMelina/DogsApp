
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Landing, Home, Detail, Form } from "./views/index"
import Error404 from './components/Loading/Error404';


function App() {
   
  return (
    <div className="App">
<Switch>
        <Route exact path='/'><Landing /></Route>
        <Route exact path='/home'><Home/></Route>
        <Route exact path='/detail/:idRaza'><Detail/></Route>    
        <Route exact path='/create'><Form/></Route>
        <Route path="*"> <Error404 /> </Route>  
  </Switch>      
     </div>
  );
}   
            

export default App;
