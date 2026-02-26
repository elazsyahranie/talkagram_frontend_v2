import LoginComponent from './components/loginComponent';
import RegisterComponent from './components/registerComponent';
// h200
import { useLocation } from 'react-router-dom';

function Auth() {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[50vw] bg-sky-700"></div>
        <div className="w-[50vw] flex justify-center overflow-scroll">
          {location.pathname === '/register' ? (
            <RegisterComponent />
          ) : location.pathname === '/login' ? (
            <LoginComponent />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Auth;
