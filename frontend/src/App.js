import './App.css';
import ListUsersComponent from './Components/ListUsersComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateUserComponent from './Components/CreateUserComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <div className = "container">
          <Routes>
            <Route exact path = "/" element = {<ListUsersComponent/>}></Route>
            <Route exact path = "/users" element = {<ListUsersComponent />}></Route>
            <Route exact path = "/createUser" element = {<CreateUserComponent />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
