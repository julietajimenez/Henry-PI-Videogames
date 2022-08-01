import { Route } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Detail from './Components/Detail/Detail';
import Create from './Components/Create/Create';





function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Landing}/>
      <Route path={'/home'} component={Nav}/>
      <Route path={'/home'} component={Home}/>
      <Route path={'/detail/:id'} component={Detail}/>
      <Route path={'/create'} component={Create}/>
    </div>
  );
}

export default App;
