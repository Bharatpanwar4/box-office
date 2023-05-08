import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/starred" element={<Starred/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      

    </Routes>
  </BrowserRouter>
  )
}

export default App;
