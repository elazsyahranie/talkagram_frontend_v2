import RegisterComponent from './components/registerComponent';
// h200

function Register() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[50vw] bg-sky-700"></div>
        <div className="w-[50vw] flex justify-center overflow-scroll">
          <RegisterComponent />
        </div>
      </div>
    </>
  );
}

export default Register;
