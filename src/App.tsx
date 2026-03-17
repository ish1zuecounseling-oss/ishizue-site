import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Profile from "./pages/Profile"
import { articles } from "./data/articles"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<Profile />} />

          {articles.map((article) => (
            <Route
              key={article.path}
              path={article.path}
              element={<article.component />}
            />
          ))}

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
