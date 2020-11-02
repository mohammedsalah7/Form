import SingUp from "./pages/SignUp/index"
import LogIn from "./pages/LogIn/index"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LogIn />
                    </Route>
                    <Route exact path="/SignUp">
                        <SingUp />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
