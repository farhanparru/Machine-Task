import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Table = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/users/Inform');
        setUserData(response.data);  
      } catch (error) {
        toast.error(`Error fetching data: ${error.message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <table className="table-auto rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium">
            <th className="px-4 py-2">OTP</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2">{item.otp}</td>
              <td className="px-4 py-2">{item.user.username}</td>
              <td className="px-4 py-2">{item.user.email}</td>
            </tr>
          ))}
          <h1>Data is note avalaible</h1>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
