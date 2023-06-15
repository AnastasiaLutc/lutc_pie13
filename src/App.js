// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import { HeaderPage } from './pages/header';
import { FooterPage } from './pages/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/> 
        <Route path={'/contact'} element={<ContactPage/>}/>
      </Routes>
      <FooterPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
