import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"


function App() {

  return (
    < >
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}> 
      <Route path="/login" element={<>login page</>} />
      <Route path="/profile" element={<>profile page</>} />
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
