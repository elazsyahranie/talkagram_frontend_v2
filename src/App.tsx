// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  // w-102.5

  return (
    <>
      <div className="grid h-screen">
        <div className="m-auto">
          <h1 className="text-7xl text-center font-bold text-sky-700 text-shadow-lg/40 mb-2">
            Talkagram
          </h1>
          <h1 className="text-center font-medium mb-4">
            Talk. Connect. Belong.
          </h1>
          <div className="flex justify-center mb-2">
            <Link
              to="/register"
              className="rounded-sm bg-gray-700 hover:bg-gray-800 grid justify-center min-w-32 flex-1 items-center text-sky-50 h-8 me-3"
            >
              <span>Register</span>
            </Link>
            <Link
              to="/login"
              className="rounded-sm bg-gray-700 hover:bg-gray-800 grid justify-center min-w-32 flex-1 items-center text-sky-50 h-8 ms-3"
            >
              <span>Log In</span>
            </Link>
          </div>
          <div className="rounded-sm border shadow-gray-400 hover:bg-gray-200 grid justify-center items-center h-8">
            <span className="text-gray-900 font-medium">Google</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
