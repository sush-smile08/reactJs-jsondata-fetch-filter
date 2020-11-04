import React from 'react';
import './App.css';
import MainPage from './components/mainPage';

function App() {
  return (
    <div className="App">
      {/* <div className="container-fluid">        
      <h1>SpaceX</h1>
        <div className="row">
          <div className="col-2">
            <Filter />
          </div>
          <div className="col-10">
            <Switch>
              <Route exact path="/" component={LandingData} />
              <Route exact path="/launch-year" component={LaunchYear} />
            </Switch>
          </div>
        </div>
      </div> */}
      <MainPage />
    </div>
  );
}

export default App;
