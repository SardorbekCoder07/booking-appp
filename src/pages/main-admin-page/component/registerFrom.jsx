import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    facilityType: '',
    facilityName: '',
    email: '',
    password: '',
  });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({~
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission
//     console.log(formData);
//   };

  return (
    <div className="max-w-xl mx-auto mt-5">
      <form  className="space-y-6 ">
        <div className=' w-full flex  justify-between items-center'>
          <label htmlFor="fullName" className="  text-sm font-medium text-gray-700 mb-1">Full Names</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            className="text-center mt-1 w-[20rem] py-1 px-2 border-2 border-[#F46A06] rounded-md shadow-sm outline-none"
          />
        </div>
        <div className=' w-full flex  justify-between items-center'>
          <label htmlFor="fullName" className="  text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+250999999999"
            className="text-center mt-1 w-[20rem] py-1 px-2 border-2 border-[#F46A06] rounded-md shadow-sm outline-none"
          />
        </div>
        <div className=' w-full flex  justify-between items-center'>
          <label htmlFor="fullName" className="  text-sm font-medium text-gray-700 mb-1">Facility type</label>
          <input
            type="text"
            id="facility"
            name="facility"
            placeholder="Facility type"
            className="text-center mt-1 w-[20rem] py-1 px-2 border-2 border-[#F46A06] rounded-md shadow-sm outline-none"
          />
        </div>
        <div className=' w-full flex  justify-between items-center'>
          <label htmlFor="fullName" className="  text-sm font-medium text-gray-700 mb-1">Full Names</label>
          <input
            type="text"
            id="facilityName"
            name="facility name"
            placeholder="Facility name"
            className="text-center mt-1 w-[20rem] py-1 px-2 border-2 border-[#F46A06] rounded-md shadow-sm outline-none"
          />
        </div>
        <div className=' w-full flex  justify-between items-center'>
          <label htmlFor="fullName" className="  text-sm font-medium text-gray-700 mb-1">Enter your email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="mail@gmail.com"
            className="text-center mt-1 w-[20rem] py-1 px-2 border-2 border-[#F46A06] rounded-md shadow-sm outline-none"
          />
        </div>
        <div className=' w-full flex  justify-between items-center'>
          <label htmlFor="fullName" className=" text-sm font-medium text-gray-700 mb-1">Full Names</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Passwrod"
            className="text-center mt-1 w-[20rem] py-1 px-2 border-2 border-[#F46A06] rounded-md shadow-sm outline-none"
          />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
