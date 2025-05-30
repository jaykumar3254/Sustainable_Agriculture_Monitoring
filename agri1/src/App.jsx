import { Routes, Route, Link, Router } from 'react-router-dom';
import About from './pages/About';
import User from './pages/User';
import Loader from './pages/Loader';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import Progress from './pages/progress';
import ProgressForm from './pages/ProgressForm';


export default function App() {
  return (
    
    <div className="min-h-screen bg-gray-100 font-sans">
      
      <nav className="flex justify-between items-center px-6 py-4 bg-black shadow-md border-b border-green-400">
        <div className="text-4xl font-bold text-green-400">Go-Green-Aarogya</div>
          <div className="flex gap-4">
            <Link to="/about" className="px-4 py-2
             rounded-xl border border-green-400 text-green-400 
             hover:bg-green-600 hover:text-black transition">About</Link>
            <Link to="/user" className="px-4 py-2 rounded-xl border border-green-400 
            text-green-400 hover:bg-green-600 
            hover:text-black transition">User</Link>
            <Link to="/login" className="px-4 py-2 rounded-xl border border-green-400 
            text-green-400 hover:bg-green-600 hover:text-black transition">Login/SignUp</Link>
          </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/progressform" element={<ProgressForm />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </div>
  );
}
