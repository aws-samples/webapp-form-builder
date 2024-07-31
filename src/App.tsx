import "@cloudscape-design/global-styles/index.css"
import { Outlet } from "react-router-dom";
import TopNavigation from "./components/TopNavigation"

function App() {
  return (
    <>
    <TopNavigation />
    <Outlet />
    </>
  )
}

export default App
