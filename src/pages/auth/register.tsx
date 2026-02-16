import { useState } from 'react';
import type { ChangeEvent } from 'react';
// import ChangeEvent from 'react';
// import React, { useState, ChangeEvent, FormEvent } from "react";

function Register() {
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
      <div className="flex h-screen">
        {/* <div className="m-auto"> */}
        {/* <div className="border rounded-md min-w-lg"> */}
        <div className="w-[50vw] bg-teal-700">
          {/* <h1>Add background here</h1> */}
        </div>
        <div className="w-[50vw] flex justify-center">
          <div className="w-[80%] pt-20">
            <h1 className="text-4xl font-bold text-center mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
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
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Register;
