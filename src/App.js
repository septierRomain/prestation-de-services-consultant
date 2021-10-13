import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Component/App/Home';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
