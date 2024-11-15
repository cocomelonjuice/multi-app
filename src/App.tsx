import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import InfoPage from "./component/InfoPage";

function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InfoPage/:id" element={<InfoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;