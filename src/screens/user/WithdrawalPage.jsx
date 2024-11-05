import React, { useState } from 'react';
import { Button, Typography, Card } from '@material-tailwind/react';
import { useSubmitWithdrawal } from '../../ApiHook';
import { useSelector } from 'react-redux';

const WithdrawalPage = () => {
  const token = useSelector(state => state.user.userInfo.token);
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    accountName: '',
    amount: '',
  });

  const {
    mutate: submitWithdrawal,
    isLoading,
    isSuccess,
    isError,
    error,
    reset,
  } = useSubmitWithdrawal();

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the mutation function with the form data
    submitWithdrawal(
      { token, withdrawData: formData },
      {
        onSuccess: () => {
          setMessage('Withdrawal submitted successfully!');
          reset(); // Reset form data if needed
          setFormData({
            bankName: '',
            accountNumber: '',
            accountName: '',
            amount: '',
          });
        },
        onError: (err) => {
          setMessage(`Error: ${err.message || 'Something went wrong!'}`);
        },
      }
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-[956px] md:p-6">
      <Typography variant="h1" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Withdrawal Form
      </Typography>
      <Card className="p-6">
        {message && (
          <div className={`mb-4 p-2 rounded ${isError ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Account Name</label>
            <input
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default WithdrawalPage;