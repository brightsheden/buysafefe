import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IsPaid, confirmOrder, linkDetail } from '../../state/Actions/OrderActions';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Spinner,
} from '@material-tailwind/react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaCreditCard, FaThumbsUp } from 'react-icons/fa';

const OrderView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderState = useSelector((state) => state.order);
  const { isRequest, isSuccess, errorMessage, linkdetail } = orderState;

  const paymentSuccessState = useSelector((state) => state.payment);
  const { isSuccess: paymentSuccess } = paymentSuccessState;

  const confirmOrderState = useSelector((state) => state.confirmorder);
  const { isSuccess: orderSuccess } = confirmOrderState;

  const userState = useSelector((state) => state.user);
  const { userInfo } = userState;

  useEffect(() => {
    dispatch(linkDetail(id));
  }, [dispatch, id, paymentSuccess, orderSuccess]);

  const paymentSuccessHandler = () => {
    dispatch(IsPaid(id));
  };

  const confirmOrderHandler = () => {
    dispatch(confirmOrder(id));
  };

  const config = {
    public_key: 'FLWPUBK_TEST-b81d31f86721e44d6ef66ef0d2c21243-X',
    tx_ref: Date.now(),
    amount: linkdetail?.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: userInfo?.email,
      phone_number: '070********',
      name: userInfo?.username,
    },
    customizations: {
      title: 'Payment for ' + linkdetail?.product_name,
      description: 'Payment for order',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  if (isRequest) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" color="blue" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="container mx-auto p-6">
        <Card className="max-w-lg mx-auto">
          <CardBody>
            <Typography variant="h5" color="red" className="mb-2">
              <FaTimesCircle className="inline-block mr-2" />
              Error
            </Typography>
            <Typography>{errorMessage}</Typography>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-lg mx-auto">
        <CardHeader color="blue" className="relative h-56">
          <img
            src="https://img.freepik.com/free-photo/colleagues-working-together-project_23-2149286162.jpg?t=st=1726834105~exp=1726837705~hmac=77c2b157eeff365f7e4ac0971350e8a924a1d1be9bae15a8f2849bd51e9628e0&w=740"
            alt="Order Background"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Order Details
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {linkdetail?.product_name}
          </Typography>
          <Typography color="gray">Amount: ₦{linkdetail?.amount?.toLocaleString()}</Typography>
          <div className="flex justify-center mt-4">
            <Chip
              value={linkdetail?.is_paid ? "Paid" : "Pending"}
              color={linkdetail?.is_paid ? "green" : "amber"}
              icon={linkdetail?.is_paid ? <FaCheckCircle className="mr-1.5 h-4 w-4" /> : <FaTimesCircle className="mr-1.5 h-4 w-4" />}
            />
          </div>
          <div className="flex justify-center mt-2">
            <Chip
              value={linkdetail?.status}
              color={linkdetail?.status === "Completed" ? "green" : "blue"}
            />
          </div>
          {linkdetail?.product_description && (
            <div className="mt-4 p-4 bg-blue-gray-50 rounded-lg">
              <Typography variant="small" color="blue-gray" className="font-normal flex items-center">
                <FaInfoCircle className="mr-2" />
                {linkdetail.product_description}
              </Typography>
            </div>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          {linkdetail?.is_paid ? (
            <Button
              size="lg"
              color="green"
              variant="gradient"
              className="w-full"
              onClick={confirmOrderHandler}
            >
              <FaThumbsUp className="mr-2 h-5 w-5 inline-block" /> Confirm Order
            </Button>
          ) : (
            <Button
              size="lg"
              color="blue"
              variant="gradient"
              className="w-full"
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    closePaymentModal();
                    paymentSuccessHandler();
                  },
                  onClose: () => {},
                });
              }}
            >
              <FaCreditCard className="mr-2 h-5 w-5 inline-block" /> Make Payment
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderView;