import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import AgentDetails from "./pages/AgentDetails"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/details/:id" element={<AgentDetails />} />
      </Routes>
    </Router>
  )
}

export default App
