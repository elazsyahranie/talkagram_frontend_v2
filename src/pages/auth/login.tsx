import LoginComponent from './components/loginComponent';
// import RegisterComponent from './components/registerComponent';
// h200

function Login() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[50vw] bg-teal-700"></div>
        <div className="w-[50vw] flex justify-center overflow-visible">
          <LoginComponent />
        </div>
      </div>
    </>
  );
}

export default Login;
