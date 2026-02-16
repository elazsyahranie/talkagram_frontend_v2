// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid h-screen">
        <div className="m-auto">
          <h1 className="text-8xl text-center font-bold text-teal-700 text-shadow-lg/30 mb-2">
            Kiosk.
          </h1>
          <h1 className="text-center text-xl font-medium mb-2">
            Manage your store at ease
          </h1>
          <div className="flex justify-center mb-2">
            <Link to="/register">
              <div className="rounded-sm bg-sky-700 hover:bg-sky-800 min-w-32 grid justify-center items-center text-sky-50 h-8 me-3">
                Register
              </div>
            </Link>
            <Link to="/login">
              <div className="rounded-sm bg-sky-700 hover:bg-sky-800 min-w-32 grid justify-center items-center text-sky-50 h-8 ms-3">
                Log In
              </div>
            </Link>
          </div>
          <div className="rounded-sm border shadow-gray-400 hover:bg-gray-200 min-w-32 grid justify-center items-center h-8">
            <span className="text-gray-900 font-medium">Google</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
