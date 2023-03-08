import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import Store from "./store/Store";

// import Home component
import Home from "./components/Home";
// import About component
import Emergency from "./components/Emergency";
// import ContactUs component
import ContactUs from "./components/About";
import "@fontsource/kanit";

function App() {
  return (
    <>
      <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Emergency" component={Emergency} />
          <Route path="/contactus" component={ContactUs} />
          <Redirect to="/" />
        </Switch>
      </Router>
      </Provider>
    </>
  );
}

export default App;
