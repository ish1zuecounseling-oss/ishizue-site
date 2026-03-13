import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Profile from "./pages/Profile"
import ProfilePage from "./pages/ProfilePage"
import HelperBurnout from "./pages/HelperBurnout"
import EmotionalLabor from "./pages/EmotionalLabor"
import HelperBoundary from "./pages/HelperBoundary"
import HelperTrauma from "./pages/HelperTrauma"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 共通レイアウト */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* 記事一覧 */}
          <Route path="/articles" element={<Articles />} />

          {/* 心理記事 */}
          <Route path="/emotional-labor" element={<EmotionalLabor />} />
          <Route path="/helper-trauma" element={<HelperTrauma />} />
          <Route path="/helper-boundary" element={<HelperBoundary />} />
          <Route path="/helper-burnout" element={<HelperBurnout />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
