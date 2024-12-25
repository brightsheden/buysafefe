import { useQuery,useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useSelector, } from 'react-redux';



const API_URL = 'http://127.0.0.1:8000/'

export const useGetUserWithdrawals = (id) => {
  

    const token = useSelector((state) => state.user.userInfo.token);

    
    return useQuery(['user-withdrawals'], async () => {
      console.log(id)
      const { data } = await axios.get(`${API_URL}/api/v1/user/mywithdrawals/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return data;
    });
  };


  
export const useSubmitWithdrawal= () => {
    //const token = useSelector((state) => state.user.userInfo.token);
   // 
  
    return useMutation({
      mutationFn: async ({token,withdrawData}) => {
        const response = await axios.post(`${API_URL}api/v1/user/submitwithdrawal/`, withdrawData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      },
      onSuccess: (data) => {
        console.log("Withdrawal submitted successfully:", data);
      },
      onError: (error) => {
        console.error("Error submitting withdrawal:", error);
      }
    });
  };


  


  export const useGetWithdrawals = (id) => {
  

    const token = useSelector((state) => state.user.userInfo.token);

    
    return useQuery(['withdrawals'], async () => {
      console.log(id)
      const { data } = await axios.get(`${API_URL}/api/v1/user/withdrawals/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return data;
    });
  };



  


export const useApproveWithdrawal = () => {
  const token = useSelector((state) => state.user.userInfo.token);
  return useMutation({
    mutationFn: async ({  id }) => {
      const response = await axios.post(
        `${API_URL}api/v1/user/withdrawals/approve/${id}/`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Withdrawal approved successfully:', data);
    },
    onError: (error) => {
      console.error('Error approving withdrawal:', error);
    },
  });
};




export const useGetWallets = (id) => {
  

  const token = useSelector((state) => state.user.userInfo.token);

  
  return useQuery(['wallets'], async () => {
    
    const { data } = await axios.get(`${API_URL}/api/v1/user/wallets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  });
};





export const useManualTransaction = () => {
  const token = useSelector((state) => state.user.userInfo.token);
  return useMutation({
    mutationFn: async ({ transactionData }) => {
      const response = await axios.post(
        `${API_URL}api/v1/user/manual_transaction`,
        transactionData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Manual transaction created successfully:', data);
    },
    onError: (error) => {
      console.error('Error creating manual transaction:', error);
    },
  });
};
