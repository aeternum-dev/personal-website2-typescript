import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Header from "./components/header/header"
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
