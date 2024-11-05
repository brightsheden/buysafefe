import React from 'react';
import { useGetUserWithdrawals } from '../../ApiHook';

// Sample withdrawal data (this would typically come from an API)


const UserWithdrawalList = () => {
    const {data:withdrawalData} = useGetUserWithdrawals()
 


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User  Withdrawal List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Bank Name</th>
              <th className="py-3 px-6 text-left">Account Name</th>
              <th className="py-3 px-6 text-left">Account Number</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {withdrawalData?.map((withdrawal, index) => (
              <tr key={withdrawal.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="py-3 px-6">${withdrawal?.amount}</td>
                <td className="py-3 px-6">{withdrawal?.bank_name}</td>
                <td className="py-3 px-6">{withdrawal?.account_name}</td>
                <td className="py-3 px-6">{withdrawal?.account_number}</td>
                <td className={`py-3 px-6 ${withdrawal?.is_approved ? 'text-green-600' :'text-red-600'}`}>
                  {withdrawal.status  ?  'Approved' : 'Pending'}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserWithdrawalList;