import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddTeamLeader from "./pages/AddTeamLeader";
import ManageTeamLeaders from "./pages/ManageTeamLeaders";
import AddWeeklyReview from "./pages/AddWeeklyReview";
import ManageWeeklyReviews from "./pages/ManageWeeklyReviews";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add-team-leader" exact component={AddTeamLeader} />
        <Route
          path="/manage-team-leaders"
          exact
          component={ManageTeamLeaders}
        />
        <Route path="/add-weekly-review" exact component={AddWeeklyReview} />
        <Route
          path="/manage-weekly-reviews"
          exact
          component={ManageWeeklyReviews}
        />
      </Switch>
    </Router>
  );
}

export default App;
