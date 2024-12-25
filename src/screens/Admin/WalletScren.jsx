import React from 'react';
import { useGetWallets } from '../../ApiHook';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const WalletList = () => {
  // Example data

  const {data:wallets} = useGetWallets()
 

  // Calculate stats
  const totalBalance = wallets?.reduce((sum, wallet) => sum + wallet.available_balance, 0);
  const totalPendingBalance = wallets?.reduce((sum, wallet) => sum + wallet.pending_balance, 0);
  const totalPayout = wallets?.reduce((sum, wallet) => sum + wallet.payout, 0);
  const totalDeposit = wallets?.reduce((sum, wallet) => sum + wallet.deposit, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Wallet List</h1>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Total Balance</h2>
          <p className="text-xl font-bold text-green-600">₦{totalBalance}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Pending Balance</h2>
          <p className="text-xl font-bold text-yellow-600">₦{totalPendingBalance?.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Payout</h2>
          <p className="text-xl font-bold text-blue-600">₦{totalPayout?.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Deposit</h2>
          <p className="text-xl font-bold text-purple-600">₦{totalDeposit?.toLocaleString()}</p>
        </div>
      </div> */}

      <div className='my-5'>
        <Link to={'/admin/manual'}>
        <Button>Manual Transactions</Button>
        </Link>
     
      </div>

      {/* Wallet Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2 border">Balance</th>
              <th className="px-4 py-2 border">Pending Balance</th>
              <th className="px-4 py-2 border">Payout</th>
              <th className="px-4 py-2 border">Pending Withdrawal</th>
              <th className="px-4 py-2 border">Deposit</th>
            </tr>
          </thead>
          <tbody>
            {wallets?.map((wallet) => (
              <tr key={wallet.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">₦{wallet?.available_balance?.toLocaleString()}</td>
                <td className="px-4 py-2 border">₦{wallet?.pending_balance?.toLocaleString()}</td>
                <td className="px-4 py-2 border">₦{wallet?.payout?.toLocaleString()}</td>
                <td className="px-4 py-2 border">₦{wallet?.pending_withdrawal?.toLocaleString()}</td>
                <td className="px-4 py-2 border">₦{wallet?.deposit?.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletList;
