import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HelperBurnout from "./pages/HelperBurnout"
import EmotionalLabor from "./pages/EmotionalLabor"
import HelperBoundary from "./pages/HelperBoundary"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/helper-burnout" element={<HelperBurnout />} />
        <Route path="/emotional-labor" element={<EmotionalLabor />} />
        <Route path="/helper-boundary" element={<HelperBoundary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
