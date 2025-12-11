import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    < >
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<>base</>}></Route>
      <Route path="/login" element={<>login page</>}>login page</Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
