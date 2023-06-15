// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import { HeaderPage } from './pages/header';
import { FooterPage } from './pages/footer';
import { OrientationPage } from './pages/orientation';
import { NewsPage } from './pages/news';
import { PosterPage } from './pages/poster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/> 
        <Route path={'/contact'} element={<ContactPage/>}/>
        <Route path={'/orientation'} element={<OrientationPage/>}/>
        <Route path={'/news'} element={<NewsPage/>}/>
        <Route path={'/poster'} element={<PosterPage/>}/> 
      </Routes>
      <FooterPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
