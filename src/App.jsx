import {BrowserRouter , Routes, Route} from "react-router-dom"
import Form from './component/Form'
import ChildOne from './component/ChildOne'
import './App.css'
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/ChildOne" element={<ChildOne/>}/>
      </Routes>
    </BrowserRouter>
  </>
   
  )
}

export default App
