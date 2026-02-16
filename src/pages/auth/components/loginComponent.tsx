import { useState } from 'react';
import type { ChangeEvent } from 'react';

function LoginComponent() {
  type FormData = {
    phoneEmailUsername: string;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    phoneEmailUsername: '',
    password: '',
  });

  const formLabels = [
    { label: 'Phone/Email/Username', id: 'phoneEmailUsername', type: 'text' },
    { label: 'Password', id: 'password', type: 'password' },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    // Prevent the default page reload
    event.preventDefault();
    // You can add validation, API calls, etc. here
    console.dir(formData, { depth: null });
    // Optional: Reset the form field
    setFormData(() => ({
      phoneEmailUsername: '',
      password: '',
    }));
  };

  return (
    <>
      <div className="w-[80%] pt-20">
        <h1 className="text-4xl font-medium text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            {formLabels.map((item, index) => {
              return (
                <div key={index}>
                  <label htmlFor={item.id} className="text-sm">
                    {item.label}
                  </label>
                  <br></br>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    // defaultValue={item.label}
                    onChange={(e) => handleChange(e)}
                    className="border border-gray-300 rounded-sm w-full h-9 mb-2"
                  ></input>
                  <br></br>
                </div>
              );
            })}
          </div>
          <input
            type="submit"
            value="Submit"
            className="rounded-sm bg-sky-700 hover:bg-sky-800 w-full grid justify-center items-center text-sky-50 h-12 me-3 font-medium"
          ></input>
        </form>

        <div className="flex items-center mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="rounded-sm border border-gray-400 bg-gray-100 hover:bg-gray-300 w-full grid justify-center items-center h-12 me-3 font-medium text-gray-700 mb-4">
          Continue with Google
        </div>

        <p className="text-sm text-center">
          <span className="text-gray-800 ">Forget your</span>{' '}
          <a href="#" className="text-blue-600 underline">
            password?
          </a>
        </p>
      </div>
    </>
  );
}

export default LoginComponent;
