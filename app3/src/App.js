import LocalButton from "./Button";
import React from "react";
const RemoteButtonContainer = React.lazy(() => import("app1/Button"));
const App1 = React.lazy(() => import("app1/Application"));

const App = () => (
  <div>
    <h1>Nested</h1>
    <h2>App 3</h2>
    <React.Suspense fallback="Loading Button Container">
      <RemoteButtonContainer />
      <App1/>
    </React.Suspense>
    <LocalButton />
  </div>
);

export default App;
