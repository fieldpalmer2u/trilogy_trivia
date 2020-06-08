import React, {useState, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import Header from './components/Header/Header'
import "./App.css"
import routes from "./routes/routes";

import protectedRoutes from "./routes/protectedRoutes";
import * as firebase from "firebase";
import firebaseConfig from "./firebase/firebaseConfig";
import ProtectedRouteHOC from "./components/Auth/ProtectedRouteHOC";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {  

  const [isLoggedIn, setLoggedIn] = useState(false);

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }

  useEffect(() => {
    readSession()
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {/* Is logged in? {JSON.stringify(isLoggedIn)} */}
      <div className="App">
        <Router>
          {/* <Header isLoggedIn={isLoggedIn}/> */}
          <Switch>
            {/* private routes */}
            {protectedRoutes.map(route => (
              <ProtectedRouteHOC
                key={route.path}
                isLoggedIn={isLoggedIn}
                path={route.path}
                component={route.main}
                exact={route.exact}
                public={route.public}
              />
            ))}
            {/* public routes */}
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
