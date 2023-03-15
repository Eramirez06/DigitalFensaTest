import axios from 'axios';
import {Transactions} from 'models/Transactions';

// Created a simple axios get since it's only one request in the whole project
// for a more complex project I will create a separate method with a custom
// axios instance
export const getTransactions = async (): Promise<Transactions[]> => {
  const data = await axios.get(
    'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
  );
  return data?.data.reverse();
};
