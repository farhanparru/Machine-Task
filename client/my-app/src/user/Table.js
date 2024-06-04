import React from 'react';

const Table = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <table className="table-auto rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium">
            <th className="px-4 py-2">OTP</th>
            <th className="px-4 py-2">username</th>
            <th className="px-4 py-2">email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2">Malcolm Lockyer</td>
            <td className="px-4 py-2">1961</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-2">Witchy Woman</td>
            <td className="px-4 py-2">The Eagles</td>
            <td className="px-4 py-2">1972</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-2">Shining Star</td>
            <td className="px-4 py-2">Earth, Wind, and Fire</td>
            <td className="px-4 py-2">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
