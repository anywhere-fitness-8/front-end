import "./App.css";
import PageHome from "./page/pageHome";
import PageLogIn from "./page/pageLogIn";
import PageProfile from "./page/pageProfile";
import PageReserveClass from "./page/pageReserveClass";
import PageManageClass from "./page/pageManageClass";
import Logout from "./component/Logout";
import Page404 from "./page/page404";
import { Switch, Route } from "react-router-dom";
import PageRegister from "./page/pageRegistration";
import PageOnboarding from "./page/pageOnboarding";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route path="/register">
          <PageRegister />
        </Route>
        <Route path="/login">
          <PageLogIn />
        </Route>
        <Route path='/logout' component={Logout}></Route>
        <Route path="/profile">
          <PageProfile />
        </Route>
        <Route path="/reserve">
          <PageReserveClass />
        </Route>
        <Route path="/manage">
          <PageManageClass />
        </Route>
        <Route path='/onboarding'>
          <PageOnboarding />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
