import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { profile, userbalance } from '../../state/Actions/UserActions';
import { myLinks } from '../../state/Actions/OrderActions';
import { FaCopy, FaExternalLinkAlt, FaPlus, FaWallet, FaClock, FaDollarSign } from 'react-icons/fa';
import { Button, Card, Typography, IconButton } from '@material-tailwind/react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const host = window.location.host;

  const profileData = useSelector((state) => state.profile);
  const { userProfile } = profileData;

  const balanceData = useSelector((state) => state.balance);
  const { data } = balanceData;

  const orderData = useSelector((state) => state.order);
  const { links } = orderData;

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      dispatch(profile());
      dispatch(userbalance());
      dispatch(myLinks());
    }
  }, [userInfo, navigate, dispatch]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      {copySuccess && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Success</p>
          <p>Link copied to clipboard!</p>
        </div>
      )}

      <Typography variant="h1" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Welcome back, {userProfile?.name}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Available Balance', icon: FaWallet, amount: data?.available_balance },
          { title: 'Pending Balance', icon: FaClock, amount: data?.pending_balance },
          { title: 'Total Withdrawn', icon: FaDollarSign, amount: data?.payout },
        ].map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="h6" color="blue-gray" className="font-medium">
                {item.title}
              </Typography>
              <item.icon className="h-6 w-6 text-blue-gray-400" />
            </div>
            <Typography variant="h4" color="blue-gray" className="font-bold">
              ₦{item.amount?.toLocaleString()}
            </Typography>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center my-6">
        <Typography variant="h2" className="text-xl font-semibold text-gray-800">
          Recent Transactions
        </Typography>
        <Link to='/createlink'>
          <Button className="flex items-center gap-2">
            <FaPlus className="h-4 w-4" /> Create New Link
          </Button>
        </Link>
      </div>

      <Card className="w-full overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {["Name", "Amount", "Status", "Actions"].map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {links.slice(0, 5).map((link, index) => (
                <tr key={link.id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {link.product_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      ₦{link.amount.toLocaleString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <div className={`px-2 py-1 rounded-full text-xs inline-block ${
                      link.is_paid ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {link.is_paid ? 'Paid' : 'Pending'}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <IconButton variant="text" color="blue-gray" size="sm" onClick={() => handleCopy(`${host}/order/${link.id}`)}>
                        <FaCopy className="h-4 w-4" />
                      </IconButton>
                      <Link to={`/order/${link.id}`}>
                        <IconButton variant="text" color="blue-gray" size="sm">
                          <FaExternalLinkAlt className="h-4 w-4" />
                        </IconButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-6 text-center">
        <Link to="/transactions" className="text-blue-600 hover:underline">
          <Typography color="blue" className="font-medium">View All Transactions</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;