import React from "react";

const RemoteButtonContainer = React.lazy(() => import("app2/ButtonContainer"));
const Button3 = React.lazy(() => import("app3/Button"));

const App = () => (
  <div>
    <h1>Nested</h1>
    <h2>App 1</h2>
    <p>app 1 body</p>
    <React.Suspense fallback="Loading Button Container">
      <RemoteButtonContainer />
      <Button3 />
    </React.Suspense>
  </div>
);

export default App;
