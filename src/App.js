import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import NotFound from "./pages/not-found";
const Login = lazy(() => import("./pages/login"));

import "./styles/app.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={"/*"} component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
