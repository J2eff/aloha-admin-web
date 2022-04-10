import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './components/UserList'
import UserInformation from "./components/UserInformation";
import  {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
function App() {
    return (
        <div className="App">
            <Router data-test="component-app">
                <Switch>
                    <Route exact path= {"/"} component={ UserList}/>
                    <Route exact path={"/users/:id"} component={UserInformation} />
                </Switch>
            </Router>
        </div>

    );
}

export default App;
