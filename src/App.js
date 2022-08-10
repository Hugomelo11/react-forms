import {BrowserRouter, Route, Routes} from 'react-router-dom'

import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Home} from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route index element={<Home/>} />
      <Route path='about' element={ <About/>} />
      <Route path='contact' element={ <Contact />} />
      <Route path='*' element={<NotFound/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

const NotFound = () => {
  return (
    <>
    <h3>Page not found</h3>
    </>
  )
}

export default App;
