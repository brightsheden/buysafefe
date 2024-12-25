import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useManualTransaction } from '../../ApiHook';
import { Alert } from '@material-tailwind/react';


const ManualTransactionForm = () => {
  const token = useSelector((state) => state.user.userInfo.token);
  const { mutate: submitTransaction, isLoading, isError, isSuccess, error } = useManualTransaction();

  const [formData, setFormData] = useState({
    wallet_type: '',
    email:'',
    type: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    submitTransaction({ transactionData: formData });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Manual Transaction</h1>

      {isSuccess && <Alert>{"Transaction successful"}</Alert>}
      {isError && <Alert>{error.response.data.message }</Alert>}

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg space-y-4">
        {/* Balance Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Balance Type</label>
          <select
            name="wallet_type"
            value={formData.wallet_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>Select Balance Type</option>
            <option value="balance">Balance</option>
            <option value="pending_balance">Pending Balance</option>
          </select>
        </div>

 

        {/* Transaction Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Transaction Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>Select Transaction Type</option>
            <option value="deposit">Deposit</option>
            <option value="debit">Debit</option>
          </select>
        </div>

        {/* email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">User email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>

        {isError && <p className="text-red-500 mt-2">Error submitting transaction.</p>}
        {isSuccess && <p className="text-green-500 mt-2">Transaction submitted successfully!</p>}
      </form>
    </div>
  );
};

export default ManualTransactionForm;
