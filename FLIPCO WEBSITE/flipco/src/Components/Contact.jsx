import React, { useState } from 'react';
import emailjs from "emailjs-com";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        business: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if(!formData.name) newErrors.name = "Name is required";
        if(!formData.business) newErrors.business = "Business Name is required";
        if(!formData.email) {
            newErrors.email = "Email is required";
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if(!formData.message) newErrors.message = "Message is required";
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});

            emailjs
            .send(
                "service_f2nu2n8",    
                "template_4j0jh8r",   
                {
                from_name: formData.name,
                business_name: formData.business,
                from_email: formData.email,
                message: formData.message,
                },
                "c90O_c1B-nOnalGek"     
            )
            .then(
                (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("✅ Message sent successfully!");
                setFormData({ name: "", business: "", email: "", message: "" });
                },
                (err) => {
                console.log("FAILED...", err);
                alert("❌ Failed to send message. Try again later.");
                }
            );
        }
        };


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

  return (
    <>
        <div id='contact' className='py-10 px-10'>
        <h1 id='services' className='flex justify-center items-center font-bold mt-4 mb-8 px-10 text-3xl'>
            Contact Us
        </h1>

        <form onSubmit={handleSubmit}
              className="max-w-lg mx-auto p-6 bg-white rounded shadow-md border border-gray-300 space-y-4 mb-8"
        >
            <div>
                <label className="font-bold block text-sm text-gray-700">Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
                <label className="font-bold block text-sm text-gray-700">Business Name: </label>
                <input 
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                />
                {errors.business && <p className="text-red-500 text-sm">{errors.business}</p>}
            </div>

            <div>
                <label className="font-bold block text-sm text-gray-700">Email: </label>
                <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
                <label className="font-bold block text-sm text-gray-700">Message: </label>
                <textarea 
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

        <div>
            <button type='submit'
                    className="font-bold w-full bg-[#3a4d64] text-white py-2 px-4 rounded hover:bg-[#9DDCD1] hover:text-black hover:cursor-pointer transition"
            >
                    Submit
            </button>
        </div>

        </form>
        </div>
    </>
  )
}
