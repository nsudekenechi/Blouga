import { RouterProvider } from "react-router-dom"
import { Routes } from "./routes/routes"
import { Store } from "./store/context"
import { useState } from "react"


function App() {
  const [store, setStore] = useState({
    user: {}
  })
  return (
    <>
      <Store.Provider value={{ store, setStore }}>
        <RouterProvider router={Routes} />
      </Store.Provider>
    </>
  )
}

export default App
