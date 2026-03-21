import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Profile from "./pages/Profile"
const articlePages = import.meta.glob("./pages/Articles/*.tsx", { eager: true })
function App() {
const articleRoutes = Object.entries(articlePages)
  .map(([path, module]: any) => {
      const name = path
  .replace("./pages/Articles/", "")
  .replace(".tsx", "")
  .replace(/([A-Z])/g, "-$1")
  .toLowerCase()
  .replace(/^-/, "")
      const Component = module.default
      return (
        <Route
          key={name}
          path={`/articles/${name}`}
          element={<Component />}
        />
      )
    })
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<Profile />} />
          {articleRoutes}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
