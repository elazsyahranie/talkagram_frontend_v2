import { useState } from 'react';
import type { ChangeEvent } from 'react';

function RegisterComponent() {
  type FormData = {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const formLabels = [
    { label: 'First Name', id: 'firstName', type: 'text' },
    { label: 'Middle Name', id: 'middleName', type: 'text' },
    { label: 'Last Name', id: 'lastName', type: 'text' },
    { label: 'Email', id: 'email', type: 'email' },
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
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
    }));
  };

  return (
    <>
      <div className="w-[80%] pt-20">
        <h1 className="text-4xl font-medium text-center mb-4">Register</h1>
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
            className="rounded-sm bg-sky-800 hover:bg-sky-900 w-full grid justify-center items-center text-sky-50 h-12 me-3 font-medium"
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

        <p className="w-full text-sm mb-4">
          By creating an account, you agree to the{' '}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>
          . For more information about Kiosk's privacy practices, see the{' '}
          <a href="#" className="text-blue-600 underline">
            Kiosk Privacy Statement
          </a>
          . We'll occasionally send you account-related emails.
        </p>

        <p className="text-center">
          <span className="text-gray-800 ">Already have an account?</span>{' '}
          <a href="/login" className="text-blue-600 underline">
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}

export default RegisterComponent;
