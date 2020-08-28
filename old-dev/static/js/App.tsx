import { Container, makeStyles } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import Search from "./components/routes/search";
import TopBar from "./components/ui/nav/navbar";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));
function App() {
  const { container } = useStyles();
  return (
    <Router>
      <TopBar />
      <Switch>
        <Container maxWidth="md" className={container}>
          <Route path="/accept/:caseId" />
          <Route path="/search/:category" component={Search} />
          <Route path="/cases/:caseId" />
          <Route path="/" component={Search}  />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
