import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Profile from "./pages/Profile"
import HelperCounseling from "./pages/HelperCounseling"

import HelperBurnout from "./pages/HelperBurnout"
import EmotionalLabor from "./pages/EmotionalLabor"
import HelperBoundary from "./pages/HelperBoundary"
import HelperTrauma from "./pages/HelperTrauma"
import HelperFatigue from "./pages/HelperFatigue";

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/articles" element={<Articles />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/helper-counseling" element={<HelperCounseling />} />

          <Route path="/helper-burnout" element={<HelperBurnout />} />

          <Route path="/emotional-labor" element={<EmotionalLabor />} />

          <Route path="/helper-boundary" element={<HelperBoundary />} />

          <Route path="/helper-trauma" element={<HelperTrauma />} />

          <Route path="/helper-fatigue" element={<HelperFatigue />} />

        </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App
