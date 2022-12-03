import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Genre from './pages/Genre';
import Newgame from './pages/Newgame';
import Popular from './pages/Popular';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/newgame' element={<Newgame />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/popular' element={<Popular />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
