import React from 'react';
import { useApproveWithdrawal, useGetWithdrawals } from '../../ApiHook';

const WithdrawalList = () => {
  

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete withdrawal with ID: ${id}?`);
    if (confirmDelete) {
      alert(`Deleted withdrawal with ID: ${id}`);
    }
  };

  const {data:withdrawals} = useGetWithdrawals()

  const { mutate: approveWithdrawal, isLoading, isError, isSuccess } = useApproveWithdrawal();

  const handleApprove = (id) => {
    approveWithdrawal({ id });

    if(isSuccess){
        alert("Withdrawal approved");
    }
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Withdrawal List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Bank Name</th>
              <th className="px-4 py-2 border">Account Name</th>
              <th className="px-4 py-2 border">Account Number</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals?.map((withdrawal) => (
              <tr key={withdrawal.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{withdrawal?.amount}</td>
                <td className="px-4 py-2 border">{withdrawal.bank_name}</td>
                <td className="px-4 py-2 border">{withdrawal.account_name}</td>
                <td className="px-4 py-2 border">{withdrawal.account_number}</td>
                <td
                  className={`px-4 py-2 border ${
                    withdrawal.is_approved ? 'text-green-600'
                      :'text-yellow-800'
                   
                  }`}
                >
                  {withdrawal.is_approved? "approved":"pending"}
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApprove(withdrawal.id)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDelete(withdrawal.id)}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalList;
