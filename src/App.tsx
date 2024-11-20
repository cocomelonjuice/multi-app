import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import InfoPage from "./component/InfoPage";
import TaskMainPage from "./component/TaskMainPage";

function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/InfoPage/:id" element={<InfoPage />}/>
          <Route path="/TaskMainPage" element={<TaskMainPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;