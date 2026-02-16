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
    { label: 'First Name', name: 'firstName', type: 'text' },
    { label: 'Middle Name', name: 'middleName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
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
      <div className="grid h-screen">
        <div className="m-auto">
          <div className="border rounded-md min-w-lg">
            <h1 className="text-4xl mb-2">Register</h1>
            <form onSubmit={handleSubmit}>
              {formLabels.map((item, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={item.name}>{item.label}</label>
                    <br></br>
                    <input
                      type={item.type}
                      id={item.name}
                      name={item.name}
                      onChange={(e) => handleChange(e)}
                      className="border"
                    />
                    <br></br>
                  </div>
                );
              })}
              <input type="submit" value="Submit" className="border"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
