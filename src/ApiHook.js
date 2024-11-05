import { useQuery,useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';


const API_URL = 'http://127.0.0.1:8000/'

export const useGetUserWithdrawals = (id) => {
  

    const token = useSelector((state) => state.user.userInfo.token);

    console.log(token)
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
   // console.log(token)
  
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


  