import React, { useState } from 'react';
import { Button, Typography, Card } from '@material-tailwind/react';

const RefundPage = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Refund Data:', formData);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-[956px]">
      <Typography variant="h1" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Refund Request Form
      </Typography>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Order ID</label>
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Reason for Refund</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RefundPage;