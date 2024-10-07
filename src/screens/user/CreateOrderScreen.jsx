import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createLink } from '../../state/Actions/OrderActions';
import { resetOrderState } from '../../state/Slice/OrderSlice';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import { FaInfo, FaCheckCircle, FaExclamationTriangle, FaDollarSign, FaFileAlt, FaShoppingCart } from 'react-icons/fa';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderState = useSelector((state) => state.order);
  const { isRequest, isSuccess, errorMessage } = orderState;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createLink(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetOrderState());
      navigate('/profile');
    }
  }, [isSuccess, dispatch, navigate]);

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-lg mx-auto">
        <CardHeader color="blue" className="relative h-56">
          <img
            src="https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9657.jpg?t=st=1726834941~exp=1726838541~hmac=cb0885705e0433a24ab45778f342af6933dca628b225fedf1e1bcf1d0a0ed556&w=740"
            alt="Add Order Background"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-6">
            Add New Order
          </Typography>
          <form onSubmit={onSubmitHandler} className="mt-8 mb-2">
            {errorMessage && (
              <Alert
                color="red"
                icon={<FaExclamationTriangle className="h-6 w-6" />}
                className="mb-4"
              >
                {errorMessage}
              </Alert>
            )}
            {isSuccess && (
              <Alert
                color="green"
                icon={<FaCheckCircle className="h-6 w-6" />}
                className="mb-4"
              >
                Order added successfully!
              </Alert>
            )}
            <div className="mb-4 flex flex-col gap-6">
              <Input
                type="text"
                size="lg"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                label="Product or Service Name"
                icon={<FaShoppingCart className="h-5 w-5 text-blue-gray-300" />}
              />
              <Input
                type="number"
                size="lg"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                label="Amount"
                icon={<FaDollarSign className="h-5 w-5 text-blue-gray-300" />}
              />
              <Textarea
                size="lg"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                label="Order Description"
                icon={<FaFileAlt className="h-5 w-5 text-blue-gray-300" />}
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth disabled={isRequest}>
              {isRequest ? (
                <Spinner className="h-4 w-4 mx-auto" />
              ) : (
                "Add Order"
              )}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            <FaInfo className="h-4 w-4 text-blue-gray-300 mr-1" />
            Fill in the details above to create a new order.
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddOrder;