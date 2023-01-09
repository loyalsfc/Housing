import { useEffect } from "react"
import Home from "./components/Home"
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    AOS.init({once: true, duration: 1000});
  },[])

  return (
    <div className="">
      <Home />
    </div>
  )
}

export default App
