import "./App.css";
import Main from "./views/Main";
import EditAuthor from "./views/EditAuthor";
import { Router } from "@reach/router";
import CreateAuthor from "./views/CreateAuthor";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <CreateAuthor path="/new" />
        <EditAuthor path="/edit/:authorId" />
      </Router>
    </div>
  );
}

export default App;
