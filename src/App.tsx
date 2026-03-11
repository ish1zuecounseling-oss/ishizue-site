import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HelperBurnout from "./pages/HelperBurnout"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/helper-burnout" element={<HelperBurnout />} />

      </Routes>

    </BrowserRouter>
  )
}
