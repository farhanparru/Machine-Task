import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Sign = () => {
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')

const navigate = useNavigate()

const handleSubmit = async(e)=>{
   e.preventDefault();

   try {
    const response = await axios.post('http://localhost:4000/api/users/user', {
      username,
      email,
    });
    toast.success('User succesfully register')
    navigate('/Table')
    setUsername('');
    setEmail('');
  
   } catch (error) {
    toast.error("Please fill Input")
   }
}



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">
            Enter your username
          </label>
          <input
            name='username'
            id='username'
            type='text'
            placeholder="Username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Enter your email
          </label>
          <input
            name='email'
            id='email'
            type='email'
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sign;
