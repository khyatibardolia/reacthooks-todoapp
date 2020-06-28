import React, {Fragment} from 'react';
import Routing from "./router/Routing";
import {BrowserRouter as Router} from 'react-router-dom';
import {FirebaseContextProvider} from "./context/context";

function App() {
  return (
    <div className="container-fluid">
      <Fragment>
        <Router>
            <FirebaseContextProvider>
                <Routing/>
            </FirebaseContextProvider>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
