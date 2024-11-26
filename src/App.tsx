import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import InfoPage from "./component/InfoPage";
import TaskMainPage from "./component/TaskMainPage";
import NotFoundPage from "./component/NotFoundPage";
import UserProfile from "./component/UserProfile";
import { PrivateRoute } from "./auth/PrivateRoute";
import {LoginPage}  from "./auth/LoginPage";
import {LogoutPage}  from "./auth/LogoutPage";

function App(){
  return(
    <>
      <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/logout" element={<LogoutPage />}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/info-page/:id" element={<InfoPage/>}/>
              <Route path="/task-main-page" element={<TaskMainPage/>} />
              <Route path="/user-profile" element={<UserProfile/>} />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;