import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './components/Nagivation';
import Home from './pages/Home';
import SignUp from './login/SignUp';
import LogIn from './login/LogIn';
import NewPost from './pages/NewPost';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {
  // const { posts } = useSelector((state) => state.post);

 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/feeds" element={<Navigation />} /> */}
      </Routes>

      {/* <Header /> */}

      {/* <Feeds /> */}

      {/* <div className="app">
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/feeds" element={<Feeds />} />
            <Route path="/member" element={<Membership />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
        </div>
      </div> */}
    </div>
  );
}

export default App;
