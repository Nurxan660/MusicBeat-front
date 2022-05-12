import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Shazam from "./components/Shazam";
import SignIn from "./components/SignIn";
import Playlist from "./components/Playlist";
import Search from "./components/Search";
import UserPlaylist from "./components/UserPlaylist";
import UserPlaylistDetail from "./components/UserPlaylistDetail";
function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <main className="main">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/shazam' element={<Shazam/>} />
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='/playlist/:id' element={<Playlist/>} />
        <Route exact path='/search' element={<Search/>} />
        <Route exact path='/user/playlists' element={<UserPlaylist/>} />
        <Route exact path='/user/playlist/detail/:id' element={<UserPlaylistDetail/>} />
      </Routes>
      </main>
        <Footer/>
      
      
      
    </BrowserRouter >
  );
}

export default App;
