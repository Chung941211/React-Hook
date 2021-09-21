import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import index from './hook/index';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={index}  />
        </Switch>

    </Router>
  );
}

export default App;
