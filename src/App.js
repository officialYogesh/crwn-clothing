import { Switch, Route } from "react-router";

import "./App.css";
import Home from "./pages/homepage/home.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
