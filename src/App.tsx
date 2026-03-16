import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Profile from "./pages/Profile"
import HelperCounseling from "./pages/articles/HelperCounseling"

import HelperBurnout from "./pages/articles/HelperBurnout"
import EmotionalLabor from "./pages/articles/EmotionalLabor"
import HelperBoundary from "./pages/articles/HelperBoundary"
import HelperTrauma from "./pages/articles/HelperTrauma"
import HelperFatigue from "./pages/articles/HelperFatigue";
import HelperFatigueCheck from "./pages/articles/HelperFatigueCheck";

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/articles" element={<Articles />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/articles/helper-counseling" element={<HelperCounseling />} />

          <Route path="/articles/helper-burnout" element={<HelperBurnout />} />

          <Route path="/articles/emotional-labor" element={<EmotionalLabor />} />

          <Route path="/articles/helper-boundary" element={<HelperBoundary />} />

          <Route path="/articles/helper-trauma" element={<HelperTrauma />} />

          <Route path="/articles/helper-fatigue" element={<HelperFatigue />} />

          <Route path="/articles/helper-fatigue-check" element={<HelperFatigueCheck />} />

        </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App
