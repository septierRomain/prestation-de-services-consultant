import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import Foreign from './Component/Assujetti/Foreign';
import France from './Component/Assujetti/France';
import UE from './Component/Assujetti/UE';
import NonAssujetti from './Component/NonAssujetti';
import ForeignUnsubmit from './Component/NonAssujetti/ForeignUnsubmit';
import FranceUnsubmit from './Component/NonAssujetti/FranceUnsubmit';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

          {/* Routes pour les assujetti */}
          <Route exact path='/Assujetti' component={Assujetti} />
          <Route exact path='/France' component={France} />
          <Route exact path='/hors_France' component={UE} />
          <Route exact path='/hors_UE' component={Foreign} />

          {/* Routes pour les non assujetti */}
          <Route exact path='/non_assujetti' component={NonAssujetti} />
          <Route exact path='/France_non_assujetti' component={FranceUnsubmit} />
          <Route exact path='/hors_France_non_assujetti' component={ForeignUnsubmit} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
