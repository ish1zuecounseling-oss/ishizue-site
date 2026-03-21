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
