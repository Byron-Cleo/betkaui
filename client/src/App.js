// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import DepositLayout from './components/DepositLayout';

import DepositScreen from './screens/DepositScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <>
        <Router>
          <Switch>
            <Route path={['/deposit']}>
              <DepositLayout>
                <Switch>
                  <Route path="/deposit" component={DepositScreen} />
                </Switch>
              </DepositLayout>
            </Route>
            {/* Layout 1 is last because it is used for the root "/" and will be greedy */}
            <Route path={['/signup', '/']}>
              <BaseLayout>
                <Switch>
                  {/* <IndexRoute component={LoginScreen} /> */}
                  {/* <Route path="/signup" component={SignUpScreen} /> */}
                  <Route path="/" exact component={HomeScreen} />
                </Switch>
              </BaseLayout>
            </Route>
          </Switch>
        </Router>
      </>
    </>
  );
}

export default App;
