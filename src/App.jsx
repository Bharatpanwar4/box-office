import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import PageNotFound from './pages/PageNotFound';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path='/show/:showId' element={<Show/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
